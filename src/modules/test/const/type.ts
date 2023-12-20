export interface TreeNode<T>{
    data: T
    yes?: TreeNode<T> | null,
    no?: TreeNode<T> | null
}

export interface Test{
    question: string
    result?: string
}
