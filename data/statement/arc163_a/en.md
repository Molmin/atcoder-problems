Score : $300$ points

## Problem Statement

You are given a string $S$ of length $N$ consisting of lowercase English letters. Determine whether it is possible to divide $S$ into two or more consecutive substrings so that they are strictly increasing in lexicographical order.

To be precise, determine whether there is a sequence of strings $t=(t_1,t_2,\dots,t_k)$ that satisfies all of the following conditions.

- <p>The length of the sequence $k$ is at least $2$.</p>
- <p>$t_i$ is not empty. ($1 \le i \le k$)</p>
- <p>Concatenating $t_1,t_2,\dots,t_k$ in this order results in $S$.</p>
- <p>$t_i$ is lexicographically smaller than $t_{i+1}$ for every integer $i$ such that $1 \le i &lt; k$.</p>

You are given $T$ test cases. Find the answer for each of them.

 What is lexicographical order?

A string $S = S_1S_2\ldots S_{|S|}$ is said to be **lexicographically smaller** than a string $T = T_1T_2\ldots T_{|T|}$ if either 1. or 2. below holds.
Here, $|S|$ and $|T|$ represent the lengths of $S$ and $T$, respectively.

1. $|S| \lt |T|$ and $S_1S_2\ldots S_{|S|} = T_1T_2\ldots T_{|S|}$.
2. There is an integer $1 \leq i \leq \min\lbrace |S|, |T| \rbrace$ such that both of the following hold.
1.    - $S_1S_2\ldots S_{i-1} = T_1T_2\ldots T_{i-1}$.
2.    - The character $S_i$ comes before $T_i$ in alphabetical order.

## Constraints

- $1 \le T \le 2000$
- $2 \le N \le 2000$
- $S$ is a string of length $N$ consisting of lowercase English letters.
- The sum of $N$ over all test cases in a single input does not exceed $2000$.

## Input

The input is given from Standard Input in the following format:

> $T$
> 
> $\mathrm{case}_1$
> 
> $\mathrm{case}_2$
> 
> $\vdots$
> 
> $\mathrm{case}_T$

Here, $\mathrm{case}_i$ represents the $i$-th test case. Each test case is given in the following format:

> $N$
> 
> $S$

## Output

Print $T$ lines.

The $i$-th line $(1 \le i \le T)$ should contain `Yes` if it is possible to divide $S$ in the $i$-th test case into substrings that satisfy the conditions, and `No` otherwise.

```input1
5
4
abac
3
cac
2
ab
12
abababababab
5
edcba
```

```output1
Yes
No
Yes
Yes
No
```

For the first test case, you can divide $S$ into `a`, `ba`, `c`.

For the second test case, there is no way to divide $S$ into substrings so that they are strictly increasing in lexicographical order.