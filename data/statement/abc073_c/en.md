Score : $300$ points

## Problem Statement

You are playing the following game with Joisino.

- Initially, you have a blank sheet of paper.
- Joisino announces a number. If that number is written on the sheet, erase the number from the sheet; if not, write the number on the sheet. This process is repeated $N$ times.
- Then, you are asked a question: How many numbers are written on the sheet now?

The numbers announced by Joisino are given as $A_1, ... ,A_N$ in the order she announces them. How many numbers will be written on the sheet at the end of the game?

## Constraints

- $1 \leq N \leq 100000$
- $1 \leq A_i \leq 1000000000(=10^9)$
- All input values are integers.

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $A_1$
> 
> $:$
> 
> $A_N$

## Output

Print how many numbers will be written on the sheet at the end of the game.

```input1
3
6
2
6
```

```output1
1
```

The game proceeds as follows:

- <p>$6$ is not written on the sheet, so write $6$.</p>
- <p>$2$ is not written on the sheet, so write $2$.</p>
- <p>$6$ is written on the sheet, so erase $6$.</p>

Thus, the sheet contains only $2$ in the end. The answer is $1$.

```input2
4
2
5
5
2
```

```output2
0
```

It is possible that no number is written on the sheet in the end.

```input3
6
12
22
16
22
18
12
```

```output3
2
```