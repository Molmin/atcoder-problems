Score : $600$ points

## Problem Statement

**This problem is interactive.**

You are given a positive integer $N$.

Snuke secretly holds a permutation $P=(P_1,P_2,\dots,P_N)$ of $(1,2,\dots,N)$ and a sequence $A=(A_1,A_2,\dots,A_N)$ of positive integers of length $N$. **It is guaranteed that $P_1&amp;lt;P_2$.**

You may send up to $2N$ queries to Snuke. A query is of the following form:

- Specify two **distinct** positive integers $s$ and $t$ with $1\leq s,t\leq N$, and you will be given the value of $\displaystyle \sum_{i=\min(P_s,P_t)}^{\max(P_s,P_t)}A_i$.

Determine $P$ and $A$.

## Constraints

- $3\leq N\leq 5000$
- $1\leq P_i\leq N$ $(1\leq i\leq N)$
- $P_i\ne P_j$ for $i\ne j$.
- $P_1&lt;P_2$
- $1\leq A_i\leq 10^9$ $(1\leq i\leq N)$
- $N$, $P_i$, and $A_i$ are integers.
- $P$ and $A$ are fixed before the interaction with the judge.

## Input/Output

This problem is interactive.

First, $N$ is given from Standard Input:

```plain
$N$
```

Next, you may send at most $2N$ queries to Snuke. When sending a query by specifying two **distinct** positive integers $s,t$, output in the following format. Do not forget to include a newline at the end.

```plain
? $s$ $t$
```

After sending a query, you will receive a response from Snuke in the following format:

```plain
$X$
```

Here, $X$ is an integer:

- If $X\ne -1$, then $X$ is the value of $\displaystyle \sum_{i=\min(P_s,P_t)}^{\max(P_s,P_t)}A_i$.
- If $X=-1$, then either $s,t$ do not satisfy the constraints or you have sent more than $2N$ queries.-   - In this case, your program is judged as incorrect and must terminate immediately.

Once you have determined $P$ and $A$, output your answer in the following format. This output does not count as a query.

```plain
! $P_1$ $P_2$ $\dots$ $P_N$ $A_1$ $A_2$ $\dots$ $A_N$
```

**Note that $P_1&amp;lt;P_2$.** After this output, terminate your program immediately.

If you output anything that does not follow the above formats, `-1` will be given as input.

```plain
-1
```

In that case, your program is judged as incorrect and must terminate immediately.

## Notes

- <font color="red">**After every output, be sure to end with a newline and flush the standard output. Failure to do so may result in a TLE.**</font>
- When you output your answer, or receive `-1` from standard input, terminate your program immediately. Otherwise, the outcome is indeterminate.
- Note that extra newlines may be considered as an output format error.
- **The judge system for this problem is not adaptive.** That is, $P$ and $A$ are determined before the interaction with the judge and will not be changed at any point.

## Sample Interaction

For $N=6$, $P=(2,4,6,5,3,1)$, and $A=(1,9,2,25,2,9)$, here is an example of an interaction.

Input
Output
Explanation

`6`

First, the integer $N$ is given from standard input.

`? 1 2`
A query is sent to Snuke with $s=1$, $t=2$.

`36`

Since the query satisfies the constraints, the value $36$, which is equal to $\displaystyle \sum_{i=\min(P_1,P_2)}^{\max(P_1,P_2)}A_i$, is returned.

`? 2 5`
A query is sent to Snuke with $s=2$, $t=5$.

`27`

Since the query satisfies the constraints, the value $27$, which is equal to $\displaystyle \sum_{i=\min(P_2,P_5)}^{\max(P_2,P_5)}A_i$, is returned.

`! 2 4 6 5 3 1 1 9 2 25 2 9`
You report that $P$ and $A$ have been determined. After this output, the program should terminate immediately, and it will be judged as correct.

Note that this is just one example of an interaction. In particular, it is not guaranteed that $P$ and $A$ can be uniquely determined from the queries and responses shown above.