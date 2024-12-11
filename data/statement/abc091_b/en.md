Score : $200$ points

## Problem Statement

Takahashi has $N$ blue cards and $M$ red cards.
A string is written on each card. The string written on the $i$-th blue card is $s_i$, and the string written on the $i$-th red card is $t_i$.

Takahashi will now announce a string, and then check every card. Each time he finds a blue card with the string announced by him, he will earn $1$ yen (the currency of Japan); each time he finds a red card with that string, he will lose $1$ yen.

Here, we only consider the case where the string announced by Takahashi and the string on the card are exactly the same. For example, if he announces `atcoder`, he will not earn money even if there are blue cards with `atcoderr`, `atcode`, `btcoder`, and so on. (On the other hand, he will not lose money even if there are red cards with such strings, either.)

At most how much can he earn on balance?

Note that the same string may be written on multiple cards.

## Constraints

- $N$ and $M$ are integers.
- $1 \leq N, M \leq 100$
- $s_1, s_2, ..., s_N, t_1, t_2, ..., t_M$ are all strings of lengths between $1$ and $10$ (inclusive) consisting of lowercase English letters.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $s_1$
> 
> $s_2$
> 
> $:$
> 
> $s_N$
> 
> $M$
> 
> $t_1$
> 
> $t_2$
> 
> $:$
> 
> $t_M$

## Output

If Takahashi can earn at most $X$ yen on balance, print $X$.

```input1
3
apple
orange
apple
1
grape
```

```output1
2
```

He can earn $2$ yen by announcing `apple`.

```input2
3
apple
orange
apple
5
apple
apple
apple
apple
apple
```

```output2
1
```

If he announces `apple`, he will lose $3$ yen. If he announces `orange`, he can earn $1$ yen.

```input3
1
voldemort
10
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
voldemort
```

```output3
0
```

If he announces `voldemort`, he will lose $9$ yen. If he announces `orange`, for example, he can avoid losing a yen.

```input4
6
red
red
blue
yellow
yellow
red
5
red
red
yellow
green
blue
```

```output4
1
```