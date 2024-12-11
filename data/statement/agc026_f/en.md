Score : $2000$ points

## Problem Statement

There are $N$ boxes arranged in a row from left to right. The $i$-th box from the left contains $a_i$ manju (buns stuffed with bean paste).
<span style="color:#C06000">Sugim</span> and <span style="color:red">Sigma</span> play a game using these boxes.
They alternately perform the following operation. <span style="color:#C06000">Sugim</span> goes first, and the game ends when a total of $N$ operations are performed.

- Choose a box that still does not contain a piece and is adjacent to the box chosen in the other player's **last** operation, then put a piece in that box. If there are multiple such boxes, any of them can be chosen.
- If there is no box that satisfies the condition above, or this is <span style="color:#C06000">Sugim</span>'s first operation, choose any one box that still does not contain a piece, then put a piece in that box.

At the end of the game, each player can have the manju in the boxes in which he put his pieces.
They love manju, and each of them is wise enough to perform the optimal moves in order to have the maximum number of manju at the end of the game.

Find the number of manju that each player will have at the end of the game.

## Constraints

- $2 \leq N \leq 300$ $000$
- $1 \leq a_i \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $a_2$ $...$ $a_N$

## Output

Print the numbers of <span style="color:#C06000">Sugim</span>'s manju and <span style="color:red">Sigma</span>'s manju at the end of the game, in this order, with a space in between.

```input1
5
20 100 10 1 10
```

```output1
120 21
```

If the two performs the optimal moves, the game proceeds as follows:

- First, <span style="color:#C06000">Sugim</span> has to put his piece in the second box from the left.
- Then, <span style="color:red">Sigma</span> has to put his piece in the leftmost box.
- Then, <span style="color:#C06000">Sugim</span> puts his piece in the third or fifth box.
- Then, <span style="color:red">Sigma</span> puts his piece in the fourth box.
- Finally, <span style="color:#C06000">Sugim</span> puts his piece in the remaining box.

```input2
6
4 5 1 1 4 5
```

```output2
11 9
```

```input3
5
1 10 100 10 1
```

```output3
102 20
```