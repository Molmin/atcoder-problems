Score : $600$ points

## Problem Statement

This is an **interactive task** (where your program interacts with the judge's program via Standard Input and Output).

You are given integers $N$, $L$, and $R$.<br>
You play the following game against the judge:

There are $N$ cards numbered $1$ through $N$ on the table.<br>
The players alternately perform the following operation:

- choose an integer pair $(x, y)$ satisfying $1 \leq x \leq N$, $L \leq y \leq R$ such that all of the $y$ cards $x, x+1, \dots, x+y-1$ remain on the table, and remove cards $x, x+1, \dots, x+y-1$ from the table.

The first player to become unable to perform the operation loses, and the other player wins.

Choose whether to go first or second, and play the game against the judge to win.

## Constraints

- $1 \leq N \leq 2000$
- $1 \leq L \leq R \leq N$
- $N$, $L$, and $R$ are integers.

## Input and Output

This is an interactive task (where your program interacts with the judge's program via Standard Input and Output).

Initially, receive $N$, $L$, and $R$, given from the input in the following format:

```plain
$N$ $L$ $R$
```

First, you choose whether to go first or second.  Print `First` if you choose to go first, and `Second` if you choose to go second.

Then, the game immediately starts.  If you choose to go first, the judge goes second, and vice versa.  You are to interact with the judge via input and output until the game ends to win the game.

In your turn, print an integer pair $(x, y)$ that you choose in the operation in the following format.  If there is no $(x, y)$ that you can choose, print $(x, y) = (0, 0)$ instead.

```plain
$x$ $y$
```

In the judge's turn, the judge print an integer pair $(a, b)$ in the following format:

```plain
$a$ $b$
```

Here, it is guaranteed that $(a, b)$ is of one of the following three kinds.

- If $(a, b) = (0, 0)$: the judge is unable to perform the operation.  In other words, you have won the game.
- If $(a, b) = (-1, -1)$: you have chosen an illegal $(x, y)$ or printed $(0, 0)$.  In other words, you have lost the game.
- Otherwise: the judge has performed the operation with $(x,y) = (a,b)$.  It is guaranteed that judge chooses valid $(x, y)$.

If the judge returns $(a,b)=(0,0)$ or $(a,b)=(-1,-1)$, the game has already ended.  In that case, terminate the program immediately.

## Notes

- <span style="color:red">**After each output, add a newline and then flush Standard Output.  Otherwise, you may get a TLE verdict.**</span>
- **If an invalid output is printed during the interaction, or if the program terminates halfway, the verdict will be indeterminate.**  Especially, note that if a runtime error occurs during the execution of the program, you may get a WA or TLE verdict instead of a RE verdict.
- Terminate the program immediately after the game ends. Otherwise, the verdict will be indeterminate.

## Sample Interaction

The following is a sample interaction where $N = 6, L = 1$, and $R = 2$.

Input
Output
Description

`6 1 2`

Initially, you are given integers $N$, $L$, and $R$.

`First`
You choose to go first and start the game.

`2 1`
$(x, y) = (2, 1)$ is chosen to remove card $2$.

`3 2`

$(x, y) = (3, 2)$ is chosen to remove cards $3, 4$.

`6 1`
$(x, y) = (6, 1)$ is chosen to remove card $6$.

`5 1`

$(x, y) = (5, 1)$ is chosen to remove card $5$.

`1 1`
$(x, y) = (1, 1)$ is chosen to remove card $1$.

`0 0`

The judge is unable to perform the operation, so you win.