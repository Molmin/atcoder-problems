Score : $400$ points

## Problem Statement

   #nck {
      width: 30px;
      height: auto;
   }

You are given a permutation $p$ of the set {$1, 2, ..., N$}. Please construct two sequences of positive integers $a_1$, $a_2$, ..., $a_N$ and $b_1$, $b_2$, ..., $b_N$ satisfying the following conditions:

- $1 \leq a_i, b_i \leq 10^9$ for all $i$
- $a_1 &lt; a_2 &lt; ... &lt; a_N$
- $b_1 &gt; b_2 &gt; ... &gt; b_N$
- $a_{p_1}+b_{p_1} &lt; a_{p_2}+b_{p_2} &lt; ... &lt; a_{p_N}+b_{p_N}$

## Constraints

- $2 \leq N \leq 20,000$
- $p$ is a permutation of the set {$1, 2, ..., N$}

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $p_1$ $p_2$ $...$ $p_N$

## Output

The output consists of two lines. The first line contains $a_1$, $a_2$, ..., $a_N$ seperated by a space. The second line contains $b_1$, $b_2$, ..., $b_N$ seperated by a space. 

It can be shown that there always exists a solution for any input satisfying the constraints.

```input1
2
1 2
```

```output1
1 4
5 4
```

$a_1 + b_1 = 6$ and $a_2 + b_2 = 8$. So this output satisfies all conditions.

```input2
3
3 2 1
```

```output2
1 2 3
5 3 1
```

```input3
3
2 3 1
```

```output3
5 10 100
100 10 1
```