Score : $600$ points

## Problem Statement

For a sequence of non-negative integers $(a _ 1,a _ 2,\ldots,a _ n)$, let us define its $\operatorname{xor}$ as the integer $X$ such that, for all non-negative integer $j$:

- the $2^j$s place of $X$ is $1$ if and only if there is an odd number of elements among $a _ 1,\ldots,a _ n$ whose $2^j$s place is $1$.

You are given a sequence of non-negative integers $A=(A _ 1,A _ 2,\ldots,A _ N)$ of length $N$.

Let $\lbrace s _ 1,s _ 2,\ldots,s _ k\rbrace\ (s _ 1\lt s _ 2\lt\cdots\lt s _ k)$ be the set of all non-negative integers that can be the $\operatorname{xor}$ of a not-necessarily-contiguous (possibly empty) subsequence of $A$.

Given integers $L$ and $R$, print $s _ L,s _ {L+1},\ldots,s _ R$ in this order.

## Constraints

- $1\leq N\leq2\times10^5$
- $0\leq A _ i\lt2^{60}\ (1\leq i\leq N)$
- $1\leq L\leq R\leq k$
- $R-L\leq2\times10^5$
- All values in the input are integers.

## Input

The input is given from Standard Input in the following format:

> $N$ $L$ $R$
> 
> $A _ 1$ $A _ 2$ $\ldots$ $A _ N$

## Output

Print $s _ i\ (L\leq i\leq R)$ in ascending order of $i$, separated by spaces.

```input1
4 1 8
2 21 17 21
```

```output1
0 2 4 6 17 19 21 23
```

There are $14$ not-necessarily-contiguous subsequences of $A$: $(),(2),(17),(21),(2,17),(2,21),(17,21),(21,17),(21,21),(2,17,21),(2,21,17),(2,21,21),(21,17,21)$, and $(2,21,17,21)$,
whose $\operatorname{xor}$s are as follows.

- The $\operatorname{xor}$ of $()$ is $0$.
- The $\operatorname{xor}$ of $(2)$ is $2$.
- The $\operatorname{xor}$ of $(17)$ is $17$.
- The $\operatorname{xor}$ of $(21)$ is $21$.
- The $\operatorname{xor}$ of $(2,17)$ is $19$.
- The $\operatorname{xor}$ of $(2,21)$ is $23$.
- The $\operatorname{xor}$ of $(17,21)$ is $4$.
- The $\operatorname{xor}$ of $(21,17)$ is $4$.
- The $\operatorname{xor}$ of $(21,21)$ is $0$.
- The $\operatorname{xor}$ of $(2,17,21)$ is $6$.
- The $\operatorname{xor}$ of $(2,21,17)$ is $6$.
- The $\operatorname{xor}$ of $(2,21,21)$ is $2$.
- The $\operatorname{xor}$ of $(21,17,21)$ is $17$.
- The $\operatorname{xor}$ of $(2,21,17,21)$ is $19$.

Therefore, the set of all non-negative integers that can be the $\operatorname{xor}$ of a subsequence of $A$ is $\lbrace0,2,4,6,17,19,21,23\rbrace$.

```input2
4 3 7
2 21 17 21
```

```output2
4 6 17 19 21
```

```input3
5 1 1
0 0 0 0 0
```

```output3
0
```

$A$ may contain the same value.

```input4
6 21 21
88 44 82 110 121 80
```

```output4
41
```

```input5
12 26 48
19629557415 14220078328 11340722069 30701452525 22333517481 720413777 11883028647 20926361028 24376768297 720413777 27999065315 13558621130
```

```output5
13558621130 14220078328 14586054825 15518998043 15970974282 16379590008 17091531049 17412316967 17836964726 18263536708 18965057557 19629557415 20282860278 20926361028 21302757781 21908867832 22333517481 22893781403 23595304394 23723463544 24376768297 24885524507 25261923402
```

Note that the input and output may not fit into a $32$-$\operatorname{bit}$ integer type.