Score : $450$ points

## Problem Statement

Takahashi keeps a sleep log.
The log is represented as an odd-length sequence $A=(A _ 1(=0), A _ 2,\ldots,A _ N)$, where odd-numbered elements represent times he got up, and even-numbered elements represent times he went to bed.
More formally, he had the following sleep sessions after starting the sleep log.

- For every integer $i$ such that $1\leq i\leq\dfrac{N-1}2$, he fell asleep exactly $A _ {2i}$ minutes after starting the sleep log and woke up exactly $A _ {2i+1}$ minutes after starting the sleep log.
- He did not fall asleep or wake up at any other time.

Answer the following $Q$ questions.
For the $i$-th question, you are given a pair of integers $(l _ i,r _ i)$ such that $0\leq l _ i\leq r _ i\leq A _ N$.

- What is the total number of minutes for which Takahashi was asleep during the $r _ i-l _ i$ minutes from exactly $l _ i$ minutes to $r _ i$ minutes after starting the sleep log?

## Constraints

- $3\leq N\lt2\times10^5$
- $N$ is odd.
- $0=A _ 1\lt A _ 2\lt\cdots\lt A _ N\leq10^9$
- $1\leq Q\leq2\times10^5$
- $0\leq l _ i\leq r _ i\leq A _ N\ (1\leq i\leq Q)$
- All input values are integers.

## Input

The input is given from Standard Input in the following format:

> $N$
> 
> $A _ 1$ $A _ 2$ $\ldots$ $A _ N$
> 
> $Q$
> 
> $l _ 1$ $r _ 1$
> 
> $l _ 2$ $r _ 2$
> 
> $\vdots$
> 
> $l _ Q$ $r _ Q$

## Output

Print the answer in $Q$ lines.
The $i$-th line should contain an integer answering to the $i$-th question.

```input1
7
0 240 720 1320 1440 1800 2160
3
480 1920
720 1200
0 2160
```

```output1
480
0
960
```

Takahashi slept as shown in the following figure.

![](https://img.atcoder.jp/abc305/fe8152a63de7fea649d1d02197649a6a.png)

The answers to each question are as follows.

- Between $480$ minutes and $1920$ minutes after starting the sleep log, Takahashi slept from $480$ minutes to $720$ minutes, from $1320$ minutes to $1440$ minutes, and from $1800$ minutes to $1920$ minutes in $3$ sleep sessions. The total sleep time is $240+120+120=480$ minutes.
- Between $720$ minutes and $1200$ minutes after starting the sleep log, Takahashi did not sleep. The total sleep time is $0$ minutes.
- Between $0$ minutes and $2160$ minutes after starting the sleep log, Takahashi slept from $240$ minutes to $720$ minutes, from $1320$ minutes to $1440$ minutes, and from $1800$ minutes to $2160$ minutes in $3$ sleep sessions. The total sleep time is $480+120+360=960$ minutes.

Therefore, the three lines of the output should contain $480$, $0$, and $960$.

```input2
21
0 20 62 192 284 310 323 324 352 374 409 452 486 512 523 594 677 814 838 946 1000
10
77 721
255 541
478 970
369 466
343 541
42 165
16 618
222 592
730 983
338 747
```

```output2
296
150
150
49
89
20
279
183
61
177
```