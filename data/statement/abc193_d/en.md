Score : $400$ points

## Problem Statement

We have $9K$ cards. For each $i = 1, 2, \dots, 9$, there are $K$ cards with $i$ written on it.<br>
We randomly shuffled these cards and handed out five cards - four face up and one face down - to each of Takahashi and Aoki.<br>
You are given a string $S$ representing the cards handed out to Takahashi and a string $T$ representing the cards handed out to Aoki.<br>
$S$ and $T$ are strings of five characters each. Each of the first four characters of each string is `1`, `2`, $\dots$, or `9`, representing the number written on the face-up card. The last character of each string is `#`, representing that the card is face down.<br>
Let us define the score of a five-card hand as $\displaystyle \sum_{i=1}^9 i \times 10^{c_i}$, where $c_i$ is the number of cards with $i$ written on them.<br>
Takahashi wins when the score of Takahashi's hand is higher than that of Aoki's hand.<br>
Find the probability that Takahashi wins.

## Constraints

- $2 \leq K \leq 10^5$
- $|S| = |T| = 5$
- The first through fourth characters of each of $S$ and $T$ are `1`, `2`, $\dots$, or `9`.
- Each of the digit `1`, `2`, $\dots$, and `9` appears at most $K$ times in total in $S$ and $T$.
- The fifth character of each of $S$ and $T$ is `#`.

## Input

Input is given from Standard Input in the following format:

> $K$
> 
> $S$
> 
> $T$

## Output

Print the probability that Takahashi wins, as a decimal.
Your answer will be judged as correct when its absolute or relative error from our answer is at most $10^{-5}$.

```input1
2
1144#
2233#
```

```output1
0.4444444444444444
```

For example, if Takahashi's hand is `11449` and Aoki's hand is `22338`, Takahashi's score is $100+2+3+400+5+6+7+8+90=621$ and Aoki's score is $1+200+300+4+5+6+7+80+9=612$, resulting in Takahashi's win.<br>
Takahashi wins when the number on his face-down card is greater than that of Aoki's face-down card, so Takahashi will win with probability $\frac49$.

```input2
2
9988#
1122#
```

```output2
1.0
```

```input3
6
1122#
2228#
```

```output3
0.001932367149758454
```

Takahashi wins only when Takahashi's hand is `11222` and Aoki's hand is `22281`, with probability $\frac2{1035}$.

```input4
100000
3226#
3597#
```

```output4
0.6296297942426154
```