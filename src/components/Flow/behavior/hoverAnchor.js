import G6 from '@antv/g6';

G6.registerBehavior('hoverAnchor', {
    getEvents() {
        return {
            mouseenter: 'onEnterAnchor',
            mouseleave: 'onLeaveAnchor'
        };
    },
    shouldBegin(ev) {
        const { target } = ev;
        const targetName = target.get('className');
        // 如果点击的不是锚点就结束
        if (targetName === 'anchor') return true;
        else return false;
    },
    onEnterAnchor(e) {
        if (!this.shouldBegin(e)) return;
        const graph = this.graph;
        const node = e.item;
        const { target } = e;
        graph.setItemState(node, 'activeAnchor', target);
    },
    onLeaveAnchor(e) {
        if (!this.shouldBegin(e)) return;
        const graph = this.graph;
        const node = e.item;
        const { target } = e;
        graph.setItemState(node, 'activeAnchor', false);
    }
});
