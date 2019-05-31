// Performs inorder traversal of a tree
inorder(node)
{
    if(node !== null)
    {
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right);
    }
}

// Performs preorder traversal of a tree
preorder(node)
{
    if(node != null)
    {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
}

// Performs postorder traversal of a tree
postorder(node)
{
    if(node != null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
} 
