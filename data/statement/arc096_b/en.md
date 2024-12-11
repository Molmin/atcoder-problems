Score : $500$ points

## Problem Statement

"Teishi-zushi", a Japanese restaurant, is a plain restaurant with only one round counter. The outer circumference of the counter is $C$ meters. Customers cannot go inside the counter.

Nakahashi entered Teishi-zushi, and he was guided to the counter. Now, there are $N$ pieces of sushi (vinegared rice with seafood and so on) on the counter. The distance measured clockwise from the point where Nakahashi is standing to the point where the $i$-th sushi is placed, is $x_i$ meters. Also, the $i$-th sushi has a nutritive value of $v_i$ kilocalories.

Nakahashi can freely walk around the circumference of the counter. When he reach a point where a sushi is placed, he can eat that sushi and take in its nutrition (naturally, the sushi disappears). However, while walking, he consumes $1$ kilocalories per meter.

Whenever he is satisfied, he can leave the restaurant from any place (he does not have to return to the initial place). On balance, at most how much nutrition can he take in before he leaves? That is, what is the maximum possible value of the total nutrition taken in minus the total energy consumed? Assume that there are no other customers, and no new sushi will be added to the counter. Also, since Nakahashi has plenty of nutrition in his body, assume that no matter how much he walks and consumes energy, he never dies from hunger.

## Constraints

- $1 \leq N \leq 10^5$
- $2 \leq C \leq 10^{14}$
- $1 \leq x_1 &lt; x_2 &lt; ... &lt; x_N &lt; C$
- $1 \leq v_i \leq 10^9$
- All values in input are integers.

## Subscores

- $300$ points will be awarded for passing the test set satisfying $N \leq 100$.

## Input

Input is given from Standard Input in the following format:

> $N$ $C$
> 
> $x_1$ $v_1$
> 
> $x_2$ $v_2$
> 
> $:$
> 
> $x_N$ $v_N$

## Output

If Nakahashi can take in at most $c$ kilocalories on balance before he leaves the restaurant, print $c$.

```input1
3 20
2 80
9 120
16 1
```

```output1
191
```

There are three sushi on the counter with a circumference of $20$ meters. If he walks two meters clockwise from the initial place, he can eat a sushi of $80$ kilocalories. If he walks seven more meters clockwise, he can eat a sushi of $120$ kilocalories. If he leaves now, the total nutrition taken in is $200$ kilocalories, and the total energy consumed is $9$ kilocalories, thus he can take in $191$ kilocalories on balance, which is the largest possible value.

```input2
3 20
2 80
9 1
16 120
```

```output2
192
```

The second and third sushi have been swapped. Again, if he walks two meters clockwise from the initial place, he can eat a sushi of $80$ kilocalories. If he walks six more meters counterclockwise this time, he can eat a sushi of $120$ kilocalories. If he leaves now, the total nutrition taken in is $200$ kilocalories, and the total energy consumed is $8$ kilocalories, thus he can take in $192$ kilocalories on balance, which is the largest possible value.

```input3
1 100000000000000
50000000000000 1
```

```output3
0
```

Even though the only sushi is so far that it does not fit into a $32$-bit integer, its nutritive value is low, thus he should immediately leave without doing anything.

```input4
15 10000000000
400000000 1000000000
800000000 1000000000
1900000000 1000000000
2400000000 1000000000
2900000000 1000000000
3300000000 1000000000
3700000000 1000000000
3800000000 1000000000
4000000000 1000000000
4100000000 1000000000
5200000000 1000000000
6600000000 1000000000
8000000000 1000000000
9300000000 1000000000
9700000000 1000000000
```

```output4
6500000000
```

All these sample inputs above are included in the test set for the partial score.