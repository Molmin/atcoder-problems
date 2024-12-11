Score : $100$ points

## Problem Statement

Taro's summer vacation starts tomorrow, and he has decided to make plans for it now.

The vacation consists of $N$ days.
For each $i$ ($1 \leq i \leq N$), Taro will choose one of the following activities and do it on the $i$-th day:

- A: Swim in the sea. Gain $a_i$ points of happiness.
- B: Catch bugs in the mountains. Gain $b_i$ points of happiness.
- C: Do homework at home. Gain $c_i$ points of happiness.

As Taro gets bored easily, he cannot do the same activities for two or more consecutive days.

Find the maximum possible total points of happiness that Taro gains.

## Constraints

- All values in input are integers.
- $1 \leq N \leq 10^5$
- $1 \leq a_i, b_i, c_i \leq 10^4$

## Input

Input is given from Standard Input in the following format:

> $N$
> 
> $a_1$ $b_1$ $c_1$
> 
> $a_2$ $b_2$ $c_2$
> 
> $:$
> 
> $a_N$ $b_N$ $c_N$

## Output

Print the maximum possible total points of happiness that Taro gains.

```input1
3
10 40 70
20 50 80
30 60 90
```

```output1
210
```

If Taro does activities in the order C, B, C, he will gain $70 + 50 + 90 = 210$ points of happiness.

```input2
1
100 10 1
```

```output2
100
```

```input3
7
6 7 8
8 8 3
2 5 2
7 8 6
4 6 8
2 3 4
7 5 1
```

```output3
46
```

Taro should do activities in the order C, A, B, A, C, B, A.