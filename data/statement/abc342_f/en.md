Score: $550$ points

## Problem Statement

You will play a game against a dealer.
The game uses a $D$-sided die (dice) that shows an integer from $1$ to $D$ with equal probability, and two variables $x$ and $y$ initialized to $0$. The game proceeds as follows:

- <p>You may perform the following operation any number of times: roll the die and add the result to $x$. You can choose whether to continue rolling or not after each roll.</p>
- <p>Then, the dealer will repeat the following operation as long as $y &lt; L$: roll the die and add the result to $y$.</p>
- <p>If $x &gt; N$, you lose. Otherwise, you win if $y &gt; N$ or $x &gt; y$ and lose if neither is satisfied.</p>

Determine the probability of your winning when you act in a way that maximizes the probability of winning.

## Constraints

- All inputs are integers.
- $1 \leq L \leq N \leq 2 \times 10^5$
- $1 \leq D \leq N$

## Input

The input is given from Standard Input in the following format:

> $N$ $L$ $D$

## Output

Print the answer. Your output will be considered correct if its absolute or relative error from the true value is at most $10^{-6}$.

```input1
3 2 2
```

```output1
0.468750000000000
```

It can be proved that the optimal strategy is to continue rolling as long as $x$ is not greater than $2$.

```input2
200000 200000 200000
```

```output2
0.999986408692793
```