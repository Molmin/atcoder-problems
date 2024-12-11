Score : $500$ points

## Problem Statement

To decide which is the strongest among Rock, Paper, and Scissors, we will hold an RPS tournament.
There are $2^k$ players in this tournament, numbered $0$ through $2^k-1$. Each player has his/her favorite hand, which he/she will use in every match.

A string $s$ of length $n$ consisting of `R`, `P`, and `S` represents the players' favorite hands.
Specifically, the favorite hand of Player $i$ is represented by the $((i\text{ mod } n) + 1)$-th character of $s$; `R`, `P`, and `S` stand for Rock, Paper, and Scissors, respectively.

For $l$ and $r$ such that $r-l$ is a power of $2$, the winner of the tournament held among Players $l$ through $r-1$ will be determined as follows:

- If $r-l=1$ (that is, there is just one player), the winner is Player $l$.
- If $r-l\geq 2$, let $m=(l+r)/2$, and we hold two tournaments, one among Players $l$ through $m-1$ and the other among Players $m$ through $r-1$. Let $a$ and $b$ be the respective winners of these tournaments. $a$ and $b$ then play a match of rock paper scissors, and the winner of this match - or $a$ if the match is drawn - is the winner of the tournament held among Players $l$ through $r-1$.

Find the favorite hand of the winner of the tournament held among Players $0$ through $2^k-1$.

## Notes

- $a\text{ mod } b$ denotes the remainder when $a$ is divided by $b$.
- The outcome of a match of rock paper scissors is determined as follows:-   - If both players choose the same hand, the match is drawn;
-   - `R` beats `S`;
-   - `P` beats `R`;
-   - `S` beats `P`.

## Constraints

- $1 \leq n,k \leq 100$
- $s$ is a string of length $n$ consisting of `R`, `P`, and `S`.

## Input

Input is given from Standard Input in the following format:

> $n$ $k$
> 
> $s$

## Output

Print the favorite hand of the winner of the tournament held among Players $0$ through $2^k-1$, as `R`, `P`, or `S`.

```input1
3 2
RPS
```

```output1
P
```

- The favorite hand of the winner of the tournament held among Players $0$ through $1$ is `P`.
- The favorite hand of the winner of the tournament held among Players $2$ through $3$ is `R`.
- The favorite hand of the winner of the tournament held among Players $0$ through $3$ is `P`.

Thus, the answer is `P`.

```output1
P
 ┌─┴─┐
 P   R
┌┴┐ ┌┴┐
R P S R
```

```input2
11 1
RPSSPRSPPRS
```

```output2
P
```

```input3
1 100
S
```

```output3
S
```