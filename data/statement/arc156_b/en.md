Score : $500$ points

## Problem Statement

For a finite multiset $S$ of non-negative integers, let us define $\mathrm{mex}(S)$ as the smallest non-negative integer not in $S$. For instance, $\mathrm{mex}(\lbrace 0,0, 1,3\rbrace ) = 2, \mathrm{mex}(\lbrace 1 \rbrace) = 0, \mathrm{mex}(\lbrace \rbrace) = 0$.

There are $N$ non-negative integers on a blackboard. The $i$-th integer is $A_i$.

You will perform the following operation exactly $K$ times.

- Choose zero or more integers on the blackboard. Let $S$ be the multiset of chosen integers, and write $\mathrm{mex}(S)$ on the blackboard once.

How many multisets can be the multiset of integers on the final blackboard? Find this count modulo $998244353$.

## Constraints

- $1 \leq N,K \leq 2\times 10^5$
- $0\leq A_i\leq 2\times 10^5$
- All numbers in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $K$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$

## Output

Print the answer.

```input1
3 1
0 1 3
```

```output1
3
```

The following three multisets can be obtained by the operations.

- $\lbrace 0,0,1,3 \rbrace$
- $\lbrace 0,1,1,3\rbrace$
- $\lbrace 0,1,2,3 \rbrace$

For instance, you can get $\lbrace 0,1,1,3\rbrace$ by choosing the $0$ on the blackboard to let $S=\lbrace 0\rbrace$ in the operation.

```input2
2 1
0 0
```

```output2
2
```

The following two multisets can be obtained by the operations.

- $\lbrace 0,0,0 \rbrace$
- $\lbrace 0,0,1\rbrace$

Note that you may choose zero integers in the operation.

```input3
5 10
3 1 4 1 5
```

```output3
7109
```