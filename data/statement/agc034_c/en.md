Score : $800$ points

## Problem Statement

Takahashi and Aoki will take $N$ exams numbered $1$ to $N$.
They have decided to compete in these exams.
The winner will be determined as follows:

- <p>For each exam $i$, Takahashi decides its *importance* $c_i$, which must be an integer between $l_i$ and $u_i$ (inclusive).</p>
- <p>Let $A$ be $\sum_{i=1}^{N} c_i \times$ (Takahashi's score on Exam $i$), and $B$ be $\sum_{i=1}^{N} c_i \times$ (Aoki's score on Exam $i$). Takahashi wins if $A \geq B$, and Aoki wins if $A &lt; B$.</p>

Takahashi knows that Aoki will score $b_i$ on Exam $i$, with his supernatural power.

Takahashi himself, on the other hand, will score $0$ on all the exams without studying more. For each hour of study, he can increase his score on some exam by $1$. (He can only study for an integer number of hours.)
However, **he cannot score more than $X$ on an exam**, since the perfect score for all the exams is $X$.

Print the minimum number of study hours required for Takahashi to win.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq X \leq 10^5$
- $0 \leq b_i \leq X$  $(1 \leq i \leq N)$
- $1 \leq l_i \leq u_i \leq 10^5$  $(1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $X$
> 
> $b_1$ $l_1$ $u_1$
> 
> $b_2$ $l_2$ $u_2$
> 
> $:$
> 
> $b_N$ $l_N$ $u_N$

## Output

Print the minimum number of study hours required for Takahashi to win.

```input1
2 100
85 2 3
60 1 1
```

```output1
115
```

One optimal strategy is as follows:

- <p>Choose $c_1 = 3, c_2 = 1$.</p>
- <p>Study to score $100$ on Exam $1$ and $15$ on Exam $2$.</p>

Then, $A = 3 \times 100 + 1 \times 15 = 315$, $B = 3 \times 85 + 1 \times 60 = 315$ and Takahashi will win.

```input2
2 100
85 2 3
60 10 10
```

```output2
77
```

```input3
1 100000
31415 2718 2818
```

```output3
31415
```

```input4
10 1000
451 4593 6263
324 310 6991
378 1431 7068
71 1757 9218
204 3676 4328
840 6221 9080
684 1545 8511
709 5467 8674
862 6504 9835
283 4965 9980
```

```output4
2540
```