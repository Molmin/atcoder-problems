Score: $100$ points

## Problem Statement

This is an **interactive problem**, where your program interacts with the judge system via Standard Input and Output.

You are given integers $N$, $K$, and $Q$.<br>
The judge holds a hidden permutation $(a_1, a_2, \dots, a_N)$ of $(1, 2, \dots, N)$.<br>
You may ask up to $Q$ queries to the judge, where each query is as follows:

- Choose a subset $S$ from $\lbrace 1, 2, \dots, N \rbrace$. The judge will return the number of distinct pairs $(i, j)$ such that $i &lt; j$ and $|a_i - a_j| \leq K$ where $i, j \in S$.

Let $x$ be the index $t$ where $a_t = 1$, and $y$ be the index $t$ where $a_t = N$. 
Your task is to identify the set $\lbrace x, y \rbrace$. (You do not need to distinguish which is $x$ and which is $y$.)

The judge is non-adaptive, that means the permutation $(a_1, a_2, \dots, a_N)$ is fixed before any interaction begins.

## Constraints

- All input values are integers.
- $N = 20000$
- $1 \leq K \leq 10$
- $Q = 30(K + 1)$

## Partial Score

$30$ points will be awarded for passing the test set satisfying the additional constraint $K = 10$.

## Input and Output

This is an interactive problem.

First, read integers $N$, $K$, and $Q$ from the Standard Input:

> $N$ $K$ $Q$

Then, repeat the following process until you identify the set $\lbrace x, y \rbrace$:

For a query, output the following format to the Standard Output:

> ? $s_1s_2 \dots s_N$

Here, $s_1 s_2 \dots s_N$ is a binary string of length $N$ representing the subset $S$, where $s_i = {}$`1` if $i \in S$, and $s_i = {}$`0` otherwise.

The response to your query will be provided in the Standard Input in the following format:

> $T$

Here, $T$ is the answer to the query, representing the number of distinct pairs $(i, j)$ such that $i &lt; j$ and $|a_i - a_j| \leq K$ where $i, j \in S$.

Once you identify the set $\lbrace x, y \rbrace$, output the two elements in the following format (order does not matter) and terminate your program immediately:

> ! $x$ $y$

## Notes

- **&lt;span style="color:red"&gt;Print a newline and flush Standard Output at the end of each message. Otherwise, you may get a TLE verdict.&lt;/span&gt;**
- If your query format is invalid or you exceed the number of queries, the judge will respond with $T = -1$. If you receive this response, you should immediately terminate your program. Otherwise, you may get a TLE verdict.
- Beware that unnecessary newlines are considered as malformed.

## Sample Interaction

The following is a sample interaction for $N = 5$, $K = 2$, $Q = 90$. Note that this example does not meet the constraints and will not appear in the test cases.

Input
Output
Explanation

The judge holds the permutation $(3, 5, 2, 1, 4)$.

`5 2 90`

First, integers $N$, $K$, and $Q$ are provided.

`? 11000`
You query with $S = \lbrace 1, 2 \rbrace$.

`1`

Only the pair $(1, 2)$ satisfies the condition, so the judge responds with `1`.

`? 10011`
You query with $S = \lbrace 1, 4, 5 \rbrace$.

`2`

The pairs $(1, 4)$ and $(1, 5)$ satisfy the condition, so the judge responds with `2`.

`! 2 4`
You output $\lbrace 2, 4 \rbrace$ as the answer. Since $a_4 = 1$ and $a_2 = N$, this output is correct.