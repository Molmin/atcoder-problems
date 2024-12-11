Score: $200$ points

## Problem Statement

Takahashi bought a piece of apple pie at ABC Confiserie. According to his memory, he paid $N$ yen (the currency of Japan) for it.

The consumption tax rate for foods in this shop is $8$ percent. That is, to buy an apple pie priced at $X$ yen before tax, you have to pay $X \times 1.08$ yen (rounded down to the nearest integer).

Takahashi forgot the price of his apple pie before tax, $X$, and wants to know it again. Write a program that takes $N$ as input and finds $X$. We assume $X$ is an integer.

If there are multiple possible values for $X$, find any one of them. Also, Takahashi's memory of $N$, the amount he paid, may be incorrect. If no value could be $X$, report that fact.

## Constraints

- $1 \leq N \leq 50000$
- $N$ is an integer.

## Input

Input is given from Standard Input in the following format:

> $N$

## Output

If there are values that could be $X$, the price of the apple pie before tax, print any one of them.<br>
If there are multiple such values, printing any one of them will be accepted.<br>
If no value could be $X$, print `:(`.

```input1
432
```

```output1
400
```

If the apple pie is priced at $400$ yen before tax, you have to pay $400 \times 1.08 = 432$ yen to buy one.<br>
Otherwise, the amount you have to pay will not be $432$ yen.

```input2
1079
```

```output2
:(
```

There is no possible price before tax for which you have to pay $1079$ yen with tax.

```input3
1001
```

```output3
927
```

If the apple pie is priced $927$ yen before tax, by rounding down $927 \times 1.08 = 1001.16$, you have to pay $1001$ yen.