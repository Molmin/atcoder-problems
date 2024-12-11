Score : $600$ points

## Problem Statement

We have a $N$-face die (singular of dice) that shows integers from $1$ through $N$ with equal probability.<br>
Below, the die is said to be showing an integer $X$ when it is placed so that the top face is the face with the integer $X$.<br>
Initially, the die shows the integer $S$.

You can do the following two operations on this die any number (possibly zero) of times in any order.

- Pay $A$ yen (the Japanese currency) to "increase" the value shown by the die by $1$, that is, reposition it to show $X+1$ when it currently shows $X$. This operation cannot be done when the die shows $N$.
- Pay $B$ yen to recast the die, after which it will show an integer between $1$ and $N$ with equal probability.

Consider making the die show $T$ from the initial state where it shows $S$.<br>
Print the minimum expected value of the cost required to do so when the optimal strategy is used to minimize this expected value.

## Constraints

- $1 \leq N \leq 10^9$
- $1 \leq S, T \leq N$
- $1 \leq A, B \leq 10^9$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $S$ $T$ $A$ $B$

## Output

Print the answer.
Your output will be considered correct when its absolute or relative error is at most $10^{-5}$.

```input1
5 2 4 10 4
```

```output1
15.0000000000000000
```

When the optimal strategy is used to minimize the expected cost, it will be $15$ yen.

```input2
10 6 6 1 2
```

```output2
0.0000000000000000
```

The die already shows $T$ in the initial state, which means no operation is needed.

```input3
1000000000 1000000000 1 1000000000 1000000000
```

```output3
1000000000000000000.0000000000000000
```

Your output will be considered correct when its absolute or relative error is at most $10^{-5}$.