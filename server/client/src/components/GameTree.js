var Chess = require('chess.js');

class GameTree {
    constructor(){

        this.rootNode = new Node(null, "");
        this.currentNode = this.rootNode;
        this.addMove = this.addMove.bind(this);
        this.goForward = this.goForward.bind(this);

    }

    addMove(moveStr){
        var newNode = new Node (this.currentNode, moveStr);
        var len = this.currentNode.children.length;
        for(var i=0; i<len; i++){
            var currNode = this.currentNode.children[i];
            if (currNode.move === moveStr){
                return i;
            }

        }
        this.currentNode.children.push(newNode);
        return len;
    }

    goForward(variation){
        this.currentNode = this.currentNode.children[variation];

    }

    isCorrectMove(from,to, fen){
        var chess = new Chess();
        chess.load(fen);
        if (chess.move({ from, to, promotion: 'q' }) != null && chess.in_checkmate())
            return 1;
        for(var i=0; i<this.currentNode.children.length;i++){
            if (this.currentNode.children[i].move === from+to){
                return i;
            }
        }
        return -1;

    }
    createSolutionsTree(solutions){
        for(var i=0; i<solutions.length; i++){
            var moveList = solutions[i].split(" ");
            for(var j=0; j<3; j++){
                var variation = this.addMove(moveList[j]);
                this.goForward(variation);
            }
            this.currentNode = this.rootNode;
        }
    }

}


class Node{
    constructor(parentNode, move){
        this.parentNode = parentNode;
        this.move = move;
        this.children = [];
    }

}


module.exports = GameTree;