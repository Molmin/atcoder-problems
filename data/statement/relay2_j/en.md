Score : $100$ points

## Problem Statement

We have $2N$ pots. The market price of the $i$-th pot $(1 \leq i \leq 2N)$ is $p_i$ yen (the currency of Japan).

Now, you and Lunlun the dachshund will alternately take one pot. You will go first, and we will continue until all the pots are taken by you or Lunlun. Since Lunlun does not know the market prices of the pots, she will always choose a pot randomly from the remaining pots with equal probability. You know this behavior of Lunlun, and the market prices of the pots.

Let the sum of the market prices of the pots you take be $S$ yen. Your objective is to maximize the expected value of $S$. Find the expected value of $S$ when the optimal strategy is adopted.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq p_i \leq 2 \times 10^5$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $p_1$
> 
> $:$
> 
> $p_{2N}$

## Output

Print the expected value of $S$ when the strategy to maximize the expected value of $S$ is adopted. The output is considered correct if its absolute or relative error from the judge's output is at most $10^{-9}$.

```input1
1
150000
108
```

```output1
150000.0
```

Naturally, you should choose the $150000$ yen pot.

```input2
2
50000
50000
100000
100000
```

```output2
183333.3333333333
```

First, you will take one of the $100000$ yen pots. The other $100000$ yen pot will become yours if it is not taken in Lunlun's next turn, with probability $2/3$. If it is taken, you will have to settle for a $50000$ yen pot. Thus, the expected value of $S$ when the optimal strategy is adopted is $2/3 \times (100000 + 100000) + 1/3 \times (100000 + 50000) = 183333.3333 \cdots$