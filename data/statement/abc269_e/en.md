Score : $500$ points

## Problem Statement

**This is an interactive task** (where your program interacts with the judge's program via input and output).

We have an $N$-by-$N$ chessboard and $N$ rooks. Below, the square at the $i$-th row from the top and $j$-th column from the left is denoted by $(i, j)$.<br>
Consider placing the rooks on squares of the chessboard. Here, you have to place the rooks so that all of the following conditions are satisfied.

- No row contains two or more rooks.
- No column contains two or more rooks.

Now, $N-1$ rooks are placed on the chessboard so that all of the above conditions are satisfied. You will choose a square that is not occupied by a rook and place a rook on that square. (It can be proved that there is at least one square on which a rook can be placed under the conditions.)

However, you cannot directly see which squares of the chessboard are occupied by a rook.<br>
Instead, you may ask at most $20$ questions to the judge in the following manner.

- You choose integers $A$, $B$, $C$, and $D$ such that $1 \leq A \leq B \leq N, 1 \leq C \leq D \leq N$, and ask the number of rooks in the rectangular region formed by the squares $(i, j)$ such that $A \leq i \leq B, C \leq j \leq D$.

Find a square to place a rook.

## Constraints

- $2 \leq N \leq 10^3$
- $N$ is an integer.

## Input and Output

This is an interactive task (where your program interacts with the judge's program via input and output).

First, receive the size of the chessboard, $N$, from Standard Input.

```plain
$N$
```

Next, repeat asking a question until you find a square to place a rook.<br>
A question should be printed to Standard Output in the following format:

```plain
$?$ $A$ $B$ $C$ $D$
```

The response will be given from Standard Input in the following format: 

```plain
$T$
```

Here, $T$ is the response to the question, or `-1` if the question is invalid or more than $20$ questions have been asked.

When the judge returns `-1`, the submission is already regarded as incorrect. In this case, terminate the program immediately.

When you find a square to place a rook, let $(X, Y)$ be that square and print an answer in the following format. Then, terminate the program immediately.

```plain
$!$ $X$ $Y$
```

If there are multiple appropriate answers, any of them will be accepted.

## Notes

- <span style="color:red">**Each time you print something, end it with a newline and then flush Standard Output. Otherwise, you may get a TLE verdict.**</span>
- **If an invalid output is printed during the interaction, the verdict will be indeterminate.**
- Terminate the program immediately after printing an answer. Otherwise, the verdict will be indeterminate.

## Sample Interaction

Below is an interaction where $N=3$ and the rooks are placed on $(1, 2)$ and $(2, 1)$.

Input
Output
Description

`3`

Judge first gives the integer $N$.

`? 1 2 1 3`
Participant asks a question with $(A,B,C,D)=(1,2,1,3)$.

`2`

Judge returns the answer to the question, which is $2$.

`? 2 3 1 1`
Participant asks a question with $(A,B,C,D)=(2,3,1,1)$.

`1`

Judge returns the answer to the question, which is $1$.

`? 1 3 3 3`
Participant asks a question with $(A,B,C,D)=(1,3,3,3)$.

`0`

Judge returns the answer to the question, which is $0$.

`! 3 3`
Participant finds the answer to be $(3, 3)$ and prints it.