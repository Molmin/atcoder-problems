Score : $200$ points

## Problem Statement

A sequence $a=\{a_1,a_2,a_3,......\}$ is determined as follows:

- <p>The first term $s$ is given as input.</p>
- <p>Let $f(n)$ be the following function: $f(n) = n/2$ if $n$ is even, and $f(n) = 3n+1$ if $n$ is odd.</p>
- <p>$a_i = s$ when $i = 1$, and $a_i = f(a_{i-1})$ when $i &gt; 1$.</p>

Find the minimum integer $m$ that satisfies the following condition:

- There exists an integer $n$ such that $a_m = a_n (m &gt; n)$.

## Constraints

- $1 \leq s \leq 100$
- All values in input are integers.
- It is guaranteed that all elements in $a$ and the minimum $m$ that satisfies the condition are at most $1000000$.

## Input

Input is given from Standard Input in the following format:

> $s$

## Output

Print the minimum integer $m$ that satisfies the condition.

```input1
8
```

```output1
5
```

$a=\{8,4,2,1,4,2,1,4,2,1,......\}$. As $a_5=a_2$, the answer is $5$.

```input2
7
```

```output2
18
```

$a=\{7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1,4,2,1,......\}$.

```input3
54
```

```output3
114
```