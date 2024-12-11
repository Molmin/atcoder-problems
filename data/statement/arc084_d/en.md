Score : $1000$ points

## Problem Statement

There are $N$ non-negative integers written on a blackboard. The $i$-th integer is $A_i$.

Takahashi can perform the following two kinds of operations any number of times in any order:

- Select one integer written on the board (let this integer be $X$). Write $2X$ on the board, without erasing the selected integer.
- Select two integers, possibly the same, written on the board (let these integers be $X$ and $Y$). Write $X$ XOR $Y$ (XOR stands for bitwise xor) on the blackboard, without erasing the selected integers.

How many different integers not exceeding $X$ can be written on the blackboard? We will also count the integers that are initially written on the board.
Since the answer can be extremely large, find the count modulo $998244353$.

## Constraints

- $1 \leq N \leq 6$
- $1 \leq X &lt; 2^{4000}$
- $1 \leq A_i &lt; 2^{4000}(1\leq i\leq N)$
- All input values are integers.
- $X$ and $A_i(1\leq i\leq N)$ are given in binary notation, with the most significant digit in each of them being $1$.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

Print the number of different integers not exceeding $X$ that can be written on the blackboard.

```input1
3 111
1111
10111
10010
```

```output1
4
```

Initially, $15$, $23$ and $18$ are written on the blackboard. Among the integers not exceeding $7$, four integers, $0$, $3$, $5$ and $6$, can be written.
For example, $6$ can be written as follows:

- Double $15$ to write $30$.
- Take XOR of $30$ and $18$ to write $12$.
- Double $12$ to write $24$.
- Take XOR of $30$ and $24$ to write $6$.

```input2
4 100100
1011
1110
110101
1010110
```

```output2
37
```

```input3
4 111001100101001
10111110
1001000110
100000101
11110000011
```

```output3
1843
```

```input4
1 111111111111111111111111111111111111111111111111111111111111111
1
```

```output4
466025955
```

Be sure to find the count modulo $998244353$.