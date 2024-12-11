Score : $300$ points

## Problem Statement

Given is a string $S$ consisting of lowercase English letters.
Snuke can do the operation of swapping two **adjacent** characters in $S$.
For example, if $S=$`agc`, one operation can change it to `gac` (by swapping `a` and `g`) or `acg` (by swapping `g` and `c`).

Snuke wants to do this operation zero or more times so that `atcoder` $&lt;S$ holds lexicographically.

The definition of the lexicographic relation $x< y$

For strings $x$ and $y$, it is said that $x&lt; y$ holds lexicographically if and only if one of the following conditions is satisfied:

- There exists an integer $i$ ($1 \leq i \leq \mathrm{min}(|x|,|y|)$) such that the first $i-1$ characters of $x$ and those of $y$ are equal and the $i$-th character of $x$ is strictly smaller than that of $y$ in alphabetical order.
- $|x|&lt; |y|$ holds, and the first $|x|$ characters of $y$ are equal to $x$.

Determine whether the objective is achievable. If it is achievable, find the minimum number of operations needed.

Solve $T$ test cases in an input file.

## Constraints

- $1 \leq T \leq 100$
- $1 \leq |S| \leq 1000$
- $S$ is a string consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format.
The first line of input is as follows:

> $T$

Then, $T$ test cases follow, each of which is in the following format:

> $S$

## Output

For each test case, print $-1$ if the objective is unachievable, and print the minimum number of operations needed if it is achievable.
Use one line for each case.

```input1
3
atcodeer
codeforces
aaa
```

```output1
1
0
-1
```

- The first test case: for example, swapping the last two characters makes $S=$`atcodere` $&gt;$ `atcoder` hold.
- The second test case: before doing any operation, we already have $S=$`codeforces` $&gt;$ `atcoder`.
- The third test case: no sequence of operations makes $S &gt;$ `atcoder` hold.