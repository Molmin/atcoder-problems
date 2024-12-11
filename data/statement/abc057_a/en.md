Score : $100$ points

## Problem Statement

Dolphin loves programming contests. Today, he will take part in a contest in AtCoder.<br>
In this country, 24-hour clock is used. For example, $9:00$ p.m. is referred to as "$21$ o'clock".<br>
The current time is $A$ o'clock, and a contest will begin in exactly $B$ hours.
When will the contest begin? Answer in 24-hour time.

## Constraints

- $0 \leq A,B \leq 23$
- $A$ and $B$ are integers.

## Input

The input is given from Standard Input in the following format:

> $A$ $B$

## Output

Print the hour of the starting time of the contest in 24-hour time.

```input1
9 12
```

```output1
21
```

In this input, the current time is $9$ o'clock, and $12$ hours later it will be $21$ o'clock in 24-hour time.

```input2
19 0
```

```output2
19
```

The contest has just started.

```input3
23 2
```

```output3
1
```

The contest will begin at $1$ o'clock the next day.