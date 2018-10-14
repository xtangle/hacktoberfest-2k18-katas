function Node(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

Node.prototype.insert = function(element) {
  if (this.value === null) {
    this.value = element;
    return;
  }
  if (element < this.value) {
    if (this.left) {
      return this.left.insert(element);
    }
    this.left = new Node(element, null, null);
  }
  else if (element > this.value) {
    if (this.right) {
      return this.right.insert(element);
    }
    this.right = new Node(element, null, null);
  }
};

Node.prototype.find = function(element) {
  if (this.value === null) {
    return null;
  }
  if (element < this.value) {
    return this.left && this.left.find(element);
  }
  if (element > this.value) {
    return this.right && this.right.find(element);
  }
  return this.value;
};

export const createBinarySearchTree = (elements) => {
  let tree = new Node(null, null, null);
  for (let i = 0; i < elements.length; i++) {
    tree.insert(elements[i]);
  }
  return tree;
};
