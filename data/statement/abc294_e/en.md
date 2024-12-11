Score : $500$ points

## Problem Statement

We have a grid with $2$ rows and $L$ columns.
Let $(i,j)$ denote the square at the $i$-th row from the top $(i\in\lbrace1,2\rbrace)$ and $j$-th column from the left $(1\leq j\leq L)$.
$(i,j)$ has an integer $x _ {i,j}$ written on it.

Find the number of integers $j$ such that $x _ {1,j}=x _ {2,j}$.

Here, the description of $x _ {i,j}$ is given to you as the run-length compressions of $(x _ {1,1},x _ {1,2},\ldots,x _ {1,L})$ and $(x _ {2,1},x _ {2,2},\ldots,x _ {2,L})$ into sequences of lengths $N _ 1$ and $N _ 2$, respectively: $((v _ {1,1},l _ {1,1}),\ldots,(v _ {1,N _ 1},l _ {1,N _ 1}))$ and $((v _ {2,1},l _ {2,1}),\ldots,(v _ {2,N _ 2},l _ {2,N _ 2}))$.

Here, the run-length compression of a sequence $A$ is a sequence of pairs $(v _ i,l _ i)$ of an element $v _ i$ of $A$ and a positive integer $l _ i$ obtained as follows.

1. Split $A$ between each pair of different adjacent elements.
2. For each sequence $B _ 1,B _ 2,\ldots,B _ k$ after the split, let $v _ i$ be the element of $B _ i$ and $l _ i$ be the length of $B _ i$.

## Constraints

- $1\leq L\leq 10 ^ {12}$
- $1\leq N _ 1,N _ 2\leq 10 ^ 5$
- $1\leq v _ {i,j}\leq 10 ^ 9\ (i\in\lbrace1,2\rbrace,1\leq j\leq N _ i)$
- $1\leq l _ {i,j}\leq L\ (i\in\lbrace1,2\rbrace,1\leq j\leq N _ i)$
- $v _ {i,j}\neq v _ {i,j+1}\ (i\in\lbrace1,2\rbrace,1\leq j\lt N _ i)$
- $l _ {i,1}+l _ {i,2}+\cdots+l _ {i,N _ i}=L\ (i\in\lbrace1,2\rbrace)$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $L$ $N _ 1$ $N _ 2$
> 
> $v _ {1,1}$ $l _ {1,1}$
> 
> $v _ {1,2}$ $l _ {1,2}$
> 
> $\vdots$
> 
> $v _ {1,N _ 1}$ $l _ {1,N _ 1}$
> 
> $v _ {2,1}$ $l _ {2,1}$
> 
> $v _ {2,2}$ $l _ {2,2}$
> 
> $\vdots$
> 
> $v _ {2,N _ 2}$ $l _ {2,N _ 2}$

## Output

Print a single line containing the answer.

```input1
8 4 3
1 2
3 2
2 3
3 1
1 4
2 1
3 3
```

```output1
4
```

The grid is shown below.

![](https://img.atcoder.jp/abc294/14f38720983c464a322b504738344f24.png)

We have four integers $j$ such that $x _ {1,j}=x _ {2,j}$: $j=1,2,5,8$. Thus, you should print $4$.

```input2
10000000000 1 1
1 10000000000
1 10000000000
```

```output2
10000000000
```

Note that the answer may not fit into a $32$-bit integer.

```input3
1000 4 7
19 79
33 463
19 178
33 280
19 255
33 92
34 25
19 96
12 11
19 490
33 31
```

```output3
380
```