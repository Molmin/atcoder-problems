Score : $100$ points

## Problem Statement

There was an exam consisting of three problems worth $1$, $2$, and $4$ points.

Takahashi, Aoki, and Snuke took this exam.
Takahashi scored $A$ points, and Aoki scored $B$ points.

Snuke solved all of the problems solved by at least one of Takahashi and Aoki, and failed to solve any of the problems solved by neither of them.

Find Snuke's score.

It can be proved that Snuke's score is uniquely determined under the Constraints of this problem.

## Constraints

- $0\leq A,B \leq 7$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print Snuke's score as an integer.

```input1
1 2
```

```output1
3
```

Since Takahashi scored $1$ point, we see that he solved only the $1$-point problem and failed to solve the other two.<br>
Similarly, since Aoki scored $2$ points, we see that he solved only the $2$-point problem and failed to solve the other two.  

Therefore, Snuke must have solved the $1$- and $2$-point problems, but not the $4$-point one, which Takahashi and Aoki both failed to solve, for a score of $3$ points.
Thus, $3$ should be printed.

```input2
5 3
```

```output2
7
```

Since Takahashi scored $5$ points, we see that he solved the $1$- and $4$-point problems but not the $2$-point one.<br>
Similarly, since Aoki scored $3$ points, we see that he solved the $1$- and $2$-point problems but not the $4$-point one.

Therefore, each of the three problems is solved by at least one of Takahashi and Aoki, so we see that Snuke solved all of the problems, for a  score of $7$ points.
Thus, $7$ should be printed.

```input3
0 0
```

```output3
0
```

Both Takahashi and Aoki solved none of the problems.
Therefore, so did Snuke. Thus, $0$ should be printed.