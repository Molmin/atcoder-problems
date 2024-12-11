Score : $400$ points

## Problem Statement

We have $N$ cards numbered $1$ to $N$. Each side of each card has a color represented by a positive integer.

One side of Card $i$ has a color $a_i$, and the other side has a color $b_i$.

For each card, you can choose which side shows up. Find the maximum possible number of different colors showing up.

## Constraints

- $1 \leq N \leq 200000$
- $1 \leq a_i,b_i \leq 400000$
- All numbers in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$
> 
> $a_2$ $b_2$
> 
> $:$
> 
> $a_N$ $b_N$

## Output

Print the answer.

```input1
4
1 2
1 3
4 2
2 3
```

```output1
4
```

We can choose the sides with $1$, $3$, $4$, $2$ to have four colors.

```input2
2
111 111
111 111
```

```output2
1
```

They are painted with just one color.

```input3
12
5 2
5 6
1 2
9 7
2 7
5 5
4 2
6 7
2 2
7 8
9 7
1 8
```

```output3
8
```