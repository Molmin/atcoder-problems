Score : $600$ points

## Problem Statement

Solve the following problem for $T$ test cases.  

We have a perfect $K$-ary tree of depth $D$ (with $1+K+K^2+\dots+K^D$ vertices).<br>
Your objective is to cut some of the edges to obtain a connected component with exactly $X$ vertices.<br>
At least how many edges must be cut to achieve the objective?

## Constraints

- All values in the input are integers.
- $1 \le T \le 100$
- $1 \le D$
- $2 \le K$
- $\displaystyle 1 \le X \le \sum_{i=0}^{D} K^i \le 10^{18}$

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $case_1$
> 
> $\vdots$
> 
> $case_T$

Here, $case_i$ denotes the $i$-th test case.<br>
Each test case is given in the following format:

> $D$ $K$ $X$

## Output

Print $T$ lines.<br>
The $i$-th line should contain the answer to the $i$-th test case as an integer.

```input1
11
2 2 1
2 2 2
2 2 3
2 2 4
2 2 5
2 2 6
2 2 7
1 999999999999999999 1
1 999999999999999999 2
1 999999999999999999 999999999999999999
1 999999999999999999 1000000000000000000
```

```output1
1
2
1
1
2
1
0
1
999999999999999998
1
0
```