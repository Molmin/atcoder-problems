Score : $800$ points

## Problem Statement

Niwango-kun, an employee of Dwango Co., Ltd., likes Niconico TV-chan, so he collected a lot of soft toys of her and spread them on the floor.

Niwango-kun has $N$ black rare soft toys of Niconico TV-chan and they are spread together with ordinary ones. He wanted these black rare soft toys to be close together, so he decided to rearrange them.

In an infinitely large two-dimensional plane, every lattice point has a soft toy on it. The coordinates $(x_i,y_i)$ of $N$ black rare soft toys are given. All soft toys are considered to be points (without a length, area, or volume).

He may perform the following operation arbitrarily many times:

- Put an axis-aligned square with side length $D$, rotate the square by $90$ degrees with four soft toys on the four corners of the square. More specifically, if the left bottom corner's coordinate is $(x, y)$, rotate four points $(x,y) \rightarrow (x+D,y) \rightarrow (x+D,y+D) \rightarrow (x,y+D) \rightarrow (x,y)$ in this order. Each of the four corners of the square must be on a lattice point.

Let's define the *scatteredness* of an arrangement by the minimum side length of an axis-aligned square enclosing all black rare soft toys. Black rare soft toys on the edges or the vertices of a square are considered to be enclosed by the square.

Find the minimum scatteredness after he performs arbitrarily many operations.

## Constraints

- $2 \leq N \leq 10^5$
- $1 \leq D \leq 1000$
- $0 \leq x_i, y_i \leq 10^9$
- Given coordinates are pairwise distinct
- All numbers given in input are integers

## Partial Scores

- $500$ points will be awarded for passing the test set satisfying $1 \leq D \leq 30$.

## Input

Input is given from Standard Input in the following format:

> $N$ $D$
> 
> $x_1$ $y_1$
> 
> $:$
> 
> $x_N$ $y_N$

## Output

Print the answer.

```input1
3 1
0 0
1 0
2 0
```

```output1
1
```

```input2
19 2
1 3
2 3
0 1
1 1
2 1
3 1
4 4
5 4
6 4
7 4
8 4
8 3
8 2
8 1
8 0
7 0
6 0
5 0
4 0
```

```output2
4
```

```input3
8 3
0 0
0 3
3 0
3 3
2 2
2 5
5 2
5 5
```

```output3
4
```