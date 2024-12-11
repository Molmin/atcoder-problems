Score : $600$ points

## Problem Statement

Takahashi Elementary School has $N$ new students.  For $i = 1, 2, \ldots, N$, the name of the $i$-th new student is $S_i$ (which is a string consisting of lowercase English letters).
The names of the $N$ new students are distinct.

The $N$ students will be assigned a student ID $1, 2, 3, \ldots, N$ in **ascending lexicographical order** of their names.  However, instead of the ordinary order of lowercase English letters where `a` is the minimum and `z` is the maximum, we use the following order:

- First, Principal Takahashi chooses a string $P$ from the $26!$ permutations of the string `abcdefghijklmnopqrstuvwxyz` of length $26$, uniformly at random.
- The lowercase English characters that occur earlier in $P$ are considered smaller.

For each of the $N$ students, find the expected value, modulo $998244353$, of the student ID assigned (see Notes).

What is the lexicographical order?

A string $S = S_1S_2\ldots S_{|S|}$ is said to be **lexicographically smaller** than a string $T = T_1T_2\ldots T_{|T|}$ if one of the following 1. and 2. holds.
Here, $|S|$ and $|T|$ denote the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$.
2. There exists an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ satisfying the following two conditions:
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$
2.    - $S_i$ is a smaller character than $T_i$.

## Notes

We can prove that the sought expected value is always a rational number.  Moreover, under the Constraints of this problem, when the value is represented as $\frac{P}{Q}$ by two coprime integers $P$ and $Q$, we can prove that there is a unique integer $R$ such that $R \times Q \equiv P\pmod{998244353}$ and $0 \leq R \lt 998244353$.  Find such $R$.

## Constraints

- $2 \leq N$
- $N$ is an integer.
- $S_i$ is a string of length at least $1$ consisting of lowercase English letters.
- The sum of lengths of the given strings is at most $5 \times 10^5$.
- $i \neq j \Rightarrow S_i \neq S_j$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$
> 
> $S_2$
> 
> $\vdots$
> 
> $S_N$

## Output

Print $N$ lines. 
For each $i = 1, 2, \ldots, N$, the $i$-th line should contain the expected value, modulo $998244353$, of the student ID assigned to Student $i$.

```input1
3
a
aa
ab
```

```output1
1
499122179
499122179
```

The expected value of the student ID assigned to Student $1$ is $1$; the expected values of the student ID assigned to Student $2$ and $3$ are $\frac{5}{2}$.

Note that the answer should be printed modulo $998244353$.
For example, the sought expected value for Student $2$ and $3$ is $\frac{5}{2}$,
and we have $2 \times 499122179 \equiv 5\pmod{998244353}$,
so $499122179$ should be printed.

```input2
3
a
aa
aaa
```

```output2
1
2
3
```