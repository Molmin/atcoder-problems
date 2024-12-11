Score : $100$ points

## Problem Statement

A fruit store sells apples.<br>
You may perform the following operations as many times as you want in any order:

- Buy one apple for $X$ yen (the currency in Japan).
- Buy three apples for $Y$ yen.

How much yen do you need to pay to obtain **exactly** $N$ apples?  

## Constraints

- $1 \leq X \leq Y \leq 100$
- $1 \leq N \leq 100$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $X$ $Y$ $N$

## Output

Print the answer as an integer.

```input1
10 25 10
```

```output1
85
```

Buy three apples for $25$ yen three times and one apple for $10$ yen, and you will obtain exactly $10$ apples for a total of $85$ yen.<br>
You cannot obtain exactly $10$ apples for a lower cost, so the answer is $85$ yen.

```input2
10 40 10
```

```output2
100
```

It is optimal to buy an apple for $10$ yen $10$ times.

```input3
100 100 2
```

```output3
200
```

The only way to obtain **exactly** $2$ apples is to buy an apple for $100$ yen twice.

```input4
100 100 100
```

```output4
3400
```