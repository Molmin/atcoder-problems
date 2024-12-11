Score : $500$ points

## Problem Statement

Solve the following problem for $T$ test cases.

Given an integer $N$ and a string $S$, find the number of strings $X$ that satisfy all of the conditions below, modulo $998244353$.

- $X$ is a string of length $N$ consisting of uppercase English letters.
- $X$ is a palindrome.
- $X \le S$ in lexicographical order.-   - That is, $X=S$ or $X$ is lexicographically smaller than $S$.

## Constraints

- $1 \le T \le 250000$
- $N$ is an integer between $1$ and $10^6$ (inclusive).
- In a single input, the sum of $N$ over the test cases is at most $10^6$.
- $S$ is a string of length $N$ consisting of uppercase English letters.

## Input

Input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ represents the $i$-th test case.

Each test case is in the following format:

> $N$
> 
> $S$

## Output

Print $T$ lines.
The $i$-th line should contain the answer for the $i$-th test case as an integer.  

```input1
5
3
AXA
6
ABCZAZ
30
QWERTYUIOPASDFGHJKLZXCVBNMQWER
28
JVIISNEOXHSNEAAENSHXOENSIIVJ
31
KVOHEEMSOZZASHENDIGOJRTJVMVSDWW
```

```output1
24
29
212370247
36523399
231364016
```

This input contains five test cases.

Test case #1:<br>
The $24$ strings satisfying the conditions are `AAA`$,$ `ABA`$,$ `ACA`$,...,$ `AXA`.

Test case #2:<br>
$S$ may not be a palindrome.

Test case #3:<br>
Be sure to find the count modulo $998244353$.