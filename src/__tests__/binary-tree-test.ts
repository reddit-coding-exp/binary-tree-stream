import {preOrder, inOrder, levelOrder, postOrder, Tree} from '../binary-tree'

const myTree : Tree = {
    value: 8,
    left: {
        value: 5,
        left: {
            value: 9
        },
        right: {
            value: 7,
            left: {
                value: 1
            },
            right: {
                value: 12,
                left: {
                    value: 2
                }
            }
        }
    },
    right: {
        value: 4,
        right: {
            value: 11,
            left: {
                value: 3
            }
        }

    }
}


describe('binary trees', () => {

    describe('traversal', () => {

        it('preOrder works as expected', () => {
            const tree : Tree = myTree
            const  preOrderResults = preOrder(tree)
            expect(preOrderResults).toEqual([8, 5, 9, 7, 1, 12, 2, 4, 11, 3 ])
        })

        it('inOrder works as expected', () => {
            const tree : Tree = myTree
            const  inOrderResults = inOrder(tree)
            expect(inOrderResults).toEqual([9, 5, 1, 7, 2, 12, 8, 4, 3, 11 ])
        })

        it('postOrder works as expected', () => {
            const tree : Tree = myTree
            const  postOrderResults = postOrder(tree)
            expect(postOrderResults).toEqual([9, 1, 2, 12, 7, 5, 3, 11, 4, 8 ])
        })

        it('levelOrder works as expected', () => {
            const tree : Tree = myTree
            const  levelOrderResults = levelOrder(tree)
            expect(levelOrderResults).toEqual([8, 5, 4, 9, 7, 11, 1, 12, 3, 2])
        })
    })
})
