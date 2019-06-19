import React from 'react';
import G6 from '@antv/g6';
import {
    NODE_MAX_TEXT_LINE_WIDTH,
    SHAPE_CLASSNAME_LABEL,
    ITEM_TYPE_NODE,
    ITEM_STATE_SELECTED,
    LABEL_STATE_HIDE,
    LABEL_STATE_SHOW
} from '@common/constants';
import withEditorContext from '@common/EditorContext/withEditorContext';

class EditableLabel extends React.PureComponent {
    componentDidUpdate() {
        const { labelState } = this.props;

        if (labelState === LABEL_STATE_SHOW) {
            // focus
            this.labelElement.focus();

            // select all
            document.execCommand('selectAll', false, null);
        }
    }

    handleBlur = () => {
        const { labelState } = this.props;

        if (labelState === LABEL_STATE_SHOW) {
            this.executeUpdate();
        }
    };

    handleKeyDown = ({ key }) => {
        if (key === 'Enter' || key === 'Escape') {
            this.executeUpdate();
            this.props.setLabelState(LABEL_STATE_HIDE);
        }
    };

    executeUpdate = () => {
        const { executeCommand } = this.props;

        const model = this.getSelectedNode().getModel();

        const { label } = model;
        const { textContent } = this.labelElement;

        if (textContent === label) {
            return;
        }

        const { id } = model;

        executeCommand('update', {
            id,
            updateModel: {
                label: textContent
            }
        });
    };

    getSelectedNode = () => {
        const { graph } = this.props;
        return graph.findAllByState(ITEM_TYPE_NODE, ITEM_STATE_SELECTED)[0];
    };

    getLabelOffset = ({ labelShape, selectedNode }) => {
        const { graph } = this.props;

        const { x: relativeX, y: relativeY } = labelShape.getBBox();
        const { x: absoluteX, y: absoluteY } = G6.Util.applyMatrix(
            {
                x: relativeX,
                y: relativeY
            },
            selectedNode.getContainer().getMatrix()
        );

        const { x: left, y: top } = graph.getCanvasByPoint(absoluteX, absoluteY);

        return {
            top,
            left
        };
    };

    getLabelSize = ({ labelShape }) => {
        const { width, height } = labelShape.getBBox();

        return {
            width: 'auto',
            height: 'auto',
            'min-width': width,
            'max-width': `${NODE_MAX_TEXT_LINE_WIDTH}px`,
            'min-height': height
        };
    };

    getLabelFont = ({ labelShape }) => {
        const font = labelShape.attr('font');

        return {
            font
        };
    };

    getLabelZoom = () => {
        const { graph } = this.props;

        const zoom = graph.getZoom();

        return {
            transform: `scale(${zoom})`,
            'transform-origin': 'left top'
        };
    };

    render() {
        const { labelState } = this.props;

        let label = '';
        let labelStyle = {
            position: 'absolute',
            background: 'white',
            border: '1px solid #1890FF',
            outline: 'none'
        };

        if (labelState === LABEL_STATE_HIDE) {
            labelStyle = {
                ...labelStyle,
                display: 'none'
            };
        } else {
            const selectedNode = this.getSelectedNode();

            const labelShape = selectedNode.getContainer().findByClassName(SHAPE_CLASSNAME_LABEL);

            label = selectedNode.getModel().label;
            labelStyle = {
                ...labelStyle,
                ...this.getLabelOffset({
                    labelShape,
                    selectedNode
                }),
                ...this.getLabelSize({
                    labelShape
                }),
                ...this.getLabelFont({
                    labelShape
                }),
                ...this.getLabelZoom()
            };
        }

        return (
            <div
                ref={el => {
                    this.labelElement = el;
                }}
                style={labelStyle}
                contentEditable="true"
                onBlur={this.handleBlur}
                onKeyDown={this.handleKeyDown}
            >
                {label}
            </div>
        );
    }
}

export default withEditorContext(
    EditableLabel,
    ({ graph, labelState, setLabelState, executeCommand }) => ({
        graph,
        labelState,
        setLabelState,
        executeCommand
    })
);
