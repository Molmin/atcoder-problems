Score : $600$ points

## Problem Statement

This problem is **output-only**. No input is given.

Present one pair $(X, S)$ of a positive integer $X$ and a string $S$ that satisfies all of the following conditions.

- $X$ is a positive integer at least $10^{50}$ and less than $10^{5000}$.
- $S$ is a string of length at most $5000$, consisting of digits from `0` to `9`.
- For every integer $i$ such that $1 \leq i \leq 1000$, the following condition is satisfied:-   - The decimal representation of $X$ multiplied by $i$ is a (contiguous) substring of $S$.

## Input

No input is given for this problem.

## Output

Print a pair $(X, S)$ satisfying the conditions stated in the problem in the following format (there exists at least one such pair $(X, S)$).<br>
You may include leading zeros when outputting $X$, but in that case, make sure that the string representation of $X$ has length at most $5000$.

> $X$
> 
> $S$

## Sample Output

Below is an example of output that does **not** satisfy the conditions in the problem statement.

> 5
> 
> 105

This sample output does not satisfy the problem statement for the following reasons:

- The value of $X$ does not meet the first condition of the problem statement regarding its range.
- For $i = 1$ and $2$, `5` and `10` are substrings of $S$. However, for $i = 3$, `15` is not a substring of $S$. Thus, $(X, S)$ fails to meet the third condition of the problem statement.