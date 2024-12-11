Score : $300$ points

## Problem Statement

You've come to your favorite store Infinitesco to buy some ice tea.

The store sells ice tea in bottles of different volumes at different costs.
Specifically, a $0.25$-liter bottle costs $Q$ yen, a $0.5$-liter bottle costs $H$ yen, a $1$-liter bottle costs $S$ yen, and a $2$-liter bottle costs $D$ yen.
The store has an infinite supply of bottles of each type.

You want to buy exactly $N$ liters of ice tea. How many yen do you have to spend?

## Constraints

- $1 \leq Q, H, S, D \leq 10^8$
- $1 \leq N \leq 10^9$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $Q$ $H$ $S$ $D$
> 
> $N$

## Output

Print the smallest number of yen you have to spend to buy exactly $N$ liters of ice tea.

```input1
20 30 70 90
3
```

```output1
150
```

Buy one $2$-liter bottle and two $0.5$-liter bottles. You'll get $3$ liters for $90 + 30 + 30 = 150$ yen.

```input2
10000 1000 100 10
1
```

```output2
100
```

Even though a $2$-liter bottle costs just $10$ yen, you need only $1$ liter.
Thus, you have to buy a $1$-liter bottle for $100$ yen.

```input3
10 100 1000 10000
1
```

```output3
40
```

Now it's better to buy four $0.25$-liter bottles for $10 + 10 + 10 + 10 = 40$ yen.

```input4
12345678 87654321 12345678 87654321
123456789
```

```output4
1524157763907942
```