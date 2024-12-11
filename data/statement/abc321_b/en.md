Score : $200$ points

## Problem Statement

There is an exam structured as follows.

- The exam consists of $N$ rounds called round $1$ to $N$.
- In each round, you are given an integer score between $0$ and $100$, inclusive.
- Your final grade is the sum of the $N-2$ of the scores earned in the rounds excluding the highest and lowest.-   - Formally, let $S=(S_1,S_2,\dots,S_N)$ be the sequence of the scores earned in the rounds sorted in ascending order, then the final grade is $S_2+S_3+\dots+S_{N-1}$.

Now, $N-1$ rounds of the exam have ended, and your score in round $i$ was $A_i$.<br>
Print the minimum score you must earn in round $N$ for a final grade of $X$ or higher.<br>
If your final grade will never be $X$ or higher no matter what score you earn in round $N$, print `-1` instead.<br>
Note that your score in round $N$ can only be an integer between $0$ and $100$.

## Constraints

- All input values are integers.
- $3 \le N \le 100$
- $0 \le X \le 100 \times (N-2)$
- $0 \le A_i \le 100$

## Input

The input is given from Standard Input in the following format:

> $N$ $X$
> 
> $A_1$ $A_2$ $\dots$ $A_{N-1}$

## Output

Print the answer.

```input1
5 180
40 60 80 50
```

```output1
70
```

Your scores in the first four rounds were $40$, $60$, $80$, and $50$.<br>
If you earn a score of $70$ in round $5$, the sequence of the scores sorted in ascending order will be $S=(40,50,60,70,80)$, for a final grade of $50+60+70=180$.<br>
It can be shown that $70$ is the minimum score you must earn for a final grade of $180$ or higher.  

```input2
3 100
100 100
```

```output2
0
```

Your scores in the first two rounds were $100$ and $100$.<br>
If you earn a score of $0$ in round $3$, the sequence of the scores sorted in ascending order will be $S=(0,100,100)$, for a final grade of $100$.<br>
Note that the highest score, $100$, is earned multiple times, and only one of them is excluded. (The same goes for the lowest score.)<br>
It can be shown that $0$ is the minimum score you must earn for a final grade of $100$ or higher.  

```input3
5 200
0 0 99 99
```

```output3
-1
```

Your scores in the first four rounds were $0$, $0$, $99$, and $99$.<br>
It can be shown that your final grade will never be $200$ or higher no matter what score you earn in round $5$.

```input4
10 480
59 98 88 54 70 24 8 94 46
```

```output4
45
```