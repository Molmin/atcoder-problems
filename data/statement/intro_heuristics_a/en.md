## Problem Statement

AtCoder currently hosts three types of contests: ABC, ARC, and AGC. As the number of users has grown, in order to meet the needs of more users, AtCoder has decided to increase the number of contests to 26 types, from AAC to AZC. For convenience, we number these 26 types as type 1 through type 26. AtCoder wants to schedule contests for $D$ days so that user satisfaction is as high as possible. For every day, AtCoder will hold exactly one contest, and each contest will end on that day. The satisfaction is calculated as follows.

- The satisfaction at the beginning of day 1 is 0. Satisfaction can be negative.
- Holding contests increases satisfaction. The amount of increase will vary depending on a variety of factors. Specifically, we know in advance that holding a contest of type $i$ on day $d$ will increase the satisfaction by $s_{d,i}$.
- If a particular type of contest is not held for a while, the satisfaction decreases. Each contest type $i$ has an integer $c_i$, and at the end of each day $d=1,2,...,D$, the satisfaction decreases as follows. Let $\mathrm{last}(d,i)$ be the last day before day $d$ (including $d$) on which a contest of type $i$ was held. If contests of type $i$ have never been held yet, we define $\mathrm{last}(d,i)=0$. At the end of day $d$, the satisfaction decreases by $\sum _{i=1}^{26}c_i \times (d-\mathrm{last}(d,i))$.

Please schedule contests on behalf of AtCoder.
If the satisfaction at the end of day $D$ is $S$, you will get a score of $\max(10^6 + S, 0)$.
There are 50 test cases, and the score of a submission is the total scores for each test case.
You can make submissions multiple times, and the highest score among your submissions will be your score.

## Constraints

- $D = 365$
- Each $c_i$ is an integer satisfying $0\leq c_i \leq 100$.
- Each $s_{d,i}$ is an integer satisfying $0\leq s_{d,i} \leq 20000$.

## Input

Input is given from Standard Input in the following format:

> $D$
> 
> $c_1$ $c_2$ $\cdots$ $c_{26}$
> 
> $s_{1,1}$ $s_{1,2}$ $\cdots$ $s_{1,26}$
> 
> $\vdots$
> 
> $s_{D,1}$ $s_{D,2}$ $\cdots$ $s_{D,26}$

## Output

Let $t_d$ ($1\leq t_d \leq 26$) be the type of the contest that will be held at day $d$.
Print $D$ integers $t_d$ to Standard Output in the following format:

> $t_1$
> 
> $t_2$
> 
> $\vdots$
> 
> $t_D$

Any output that does not follow the above format may result in <s>0 points</s>**WA** for that test case.

## Input Generation

Each integer $c_i$ and $s_{d,i}$ is generated independently and uniformly at random from the integers in the range described in the problem statement.

```input1
5
86 90 69 51 2 96 71 47 88 34 45 46 89 34 31 38 97 84 41 80 14 4 50 83 7 82
19771 12979 18912 10432 10544 12928 13403 3047 10527 9740 8100 92 2856 14730 1396 15905 6534 4650 11469 3628 8433 2994 10899 16396 18355 11424
6674 17707 13855 16407 12232 2886 11908 1705 5000 1537 10440 10711 4917 10770 17272 15364 19277 18094 3929 3705 7169 6159 18683 15410 9092 4570
6878 4239 19925 1799 375 9563 3445 5658 19857 11401 6997 6498 19933 3848 2426 2146 19745 16880 17773 18359 3921 14172 16730 11157 5439 256
8633 15862 15303 10749 18499 7792 10317 5901 9395 11433 3514 3959 5202 19850 19469 9790 5653 784 18500 10552 17975 16615 7852 197 8471 7452
19855 17918 7990 10572 4333 438 9140 9104 12622 4985 12319 4028 19922 12132 16259 17476 2976 547 19195 19830 16285 4806 4471 9457 2864 2192
```

```output1
1
17
13
14
13
```

Note that this example is a small one for checking the problem specification. It does not satisfy the constraint $D=365$ and is never actually given as a test case. The final satisfaction with this output is 79325, so the score is 1079325.

[Input generator, score calculator, and visualizer](https://img.atcoder.jp/intro-heuristics/6f4c9d0cfda6a311fea2d9cf23e4f032.zip)

## Beginner's Guide

If you don't know what to do, proceed to problem B or C.