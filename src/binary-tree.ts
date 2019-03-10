// Use the Traversals section of this page for context
// https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html

export interface Tree {
    value: number
    left?: Tree
    right?: Tree
}


export function preOrder(tree: Tree | undefined): number[] {
    if(!tree){
        return []
    }

    return [
        tree.value,
        ...preOrder(tree.left),
        ...preOrder(tree.right)
    ]
}



export function inOrder(tree: Tree| undefined): number[] {
    if(!tree){
        return []
    }

    return [
        ...inOrder(tree.left),
        tree.value,
        ...inOrder(tree.right)
    ]
}

export function levelOrder(tree: Tree ): number[] {

    const queue: Tree[] = [tree]
    const results: number[] = []
    while(queue.length > 0){
        const t = queue.shift()

        if(t){
            results.push(t.value)

            if(t.left){
                queue.push(t.left)
            }

            if(t.right){
                queue.push(t.right)
            }
        }
    }

    return results
}


export function postOrder(tree: Tree | undefined): number[] {
    if(!tree){
        return []
    }

    return [
        ...postOrder(tree.left),
        ...postOrder(tree.right),
        tree.value
    ]
}
