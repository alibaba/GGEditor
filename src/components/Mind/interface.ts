/**
 * 数据模型
 * */
export interface MindModel {
    label: string;
    children: MindModel[];
    side?: 'left' | 'right';
}
