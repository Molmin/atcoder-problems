Score : $200$ points

## Problem Statement

There are $N$ people numbered $1$ to $N$.

Person $i$ guessed the building area of KEYENCE headquarters building to be $S_i$ square meters.

The shape of KEYENCE headquarters building is shown below, where $a$ and $b$ are some **positive integers**.<br>
That is, the building area of the building can be represented as $4ab+3a+3b$.

Based on just this information, how many of the $N$ people are guaranteed to be wrong in their guesses?

![Sketch of KEYENCE headquarters building](https://img.atcoder.jp/ghi/5a025c1ae6042fc146b4404219ffc176.png)

## Constraints

- $1 \leq N \leq 20$
- $1 \leq S_i \leq 1000$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $S_1$ $\ldots$ $S_N$

## Output

Print the answer.

```input1
3
10 20 39
```

```output1
1
```

The area would be $10$ square meters if $a=1,b=1$, and $39$ square meters if $a=2,b=3$.

However, no pair of positive integers $a$ and $b$ would make the area $20$ square meters.

Thus, we can only be sure that Person $2$ guessed wrong.

```input2
5
666 777 888 777 666
```

```output2
3
```