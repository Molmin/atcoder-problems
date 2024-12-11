(Please read problem A first. The maximum score you can get by solving this problem B is 1, which will have almost no effect on your ranking.)

## Beginner's Guide

Let's first write a program to calculate the score from a pair of input and output. You can know the total score by submitting your solution, or an official program to calculate a score is often provided for local evaluation as in this contest. Nevertheless, writing a score calculator by yourself is still useful to check your understanding of the problem specification. Moreover, the source code of the score calculator can often be reused for solving the problem or debugging your solution. So it is worthwhile to write a score calculator unless it is very complicated.

## Problem Statement

You will be given a contest schedule for $D$ days.
For each $d=1,2,\ldots,D$, calculate the satisfaction at the end of day $d$.

## Input

Input is given from Standard Input in the form of the input of Problem A followed by the output of Problem A.

> $D$
> 
> $c_1$ $c_2$ $\cdots$ $c_{26}$
> 
> $s_{1,1}$ $s_{1,2}$ $\cdots$ $s_{1,26}$
> 
> $\vdots$
> 
> $s_{D,1}$ $s_{D,2}$ $\cdots$ $s_{D,26}$
> 
> $t_1$
> 
> $t_2$
> 
> $\vdots$
> 
> $t_D$

- The constraints and generation methods for the input part are the same as those for Problem A.
- For each $d$, $t_d$ is an integer satisfying $1\leq t_d \leq 26$, and your program is expected to work correctly for any value that meets the constraints.

## Output

Let $v_d$ be the satisfaction at the end of day $d$.
Print $D$ integers $v_d$ to Standard Output in the following format:

> $v_1$
> 
> $v_2$
> 
> $\vdots$
> 
> $v_D$

```input1
5
86 90 69 51 2 96 71 47 88 34 45 46 89 34 31 38 97 84 41 80 14 4 50 83 7 82
19771 12979 18912 10432 10544 12928 13403 3047 10527 9740 8100 92 2856 14730 1396 15905 6534 4650 11469 3628 8433 2994 10899 16396 18355 11424
6674 17707 13855 16407 12232 2886 11908 1705 5000 1537 10440 10711 4917 10770 17272 15364 19277 18094 3929 3705 7169 6159 18683 15410 9092 4570
6878 4239 19925 1799 375 9563 3445 5658 19857 11401 6997 6498 19933 3848 2426 2146 19745 16880 17773 18359 3921 14172 16730 11157 5439 256
8633 15862 15303 10749 18499 7792 10317 5901 9395 11433 3514 3959 5202 19850 19469 9790 5653 784 18500 10552 17975 16615 7852 197 8471 7452
19855 17918 7990 10572 4333 438 9140 9104 12622 4985 12319 4028 19922 12132 16259 17476 2976 547 19195 19830 16285 4806 4471 9457 2864 2192
1
17
13
14
13
```

```output1
18398
35037
51140
65837
79325
```

Note that this example is a small one for checking the problem specification. It does not satisfy the constraint $D=365$ and is never actually given as a test case.

## Next Step

We can build a solution (schedule) for this problem in the order of day 1, day 2, and so on. And for every partial solution we have built, we can calculate the goodness (satisfaction) by using the above score calculator. So we can construct the following algorithm: for each $d=1,2,\ldots,D$, we select the contest type that maximizes the satisfaction at the end of day $d$. You may have already encountered this kind of "greedy algorithms" in algorithm contests such as ABC. Greedy algorithms can guarantee the optimality for several problems, but unfortunately, it doesn't ensure optimality for this problem. However, even if it does not ensure optimality, we can still obtain a reasonable solution in many cases. Let's go back to Problem A and implement the greedy algorithm by utilizing the score calculator you just implemented!

Greedy methods can be applied to a variety of problems, are easy to implement, and often run relatively fast compared to other methods. Greedy is often the most powerful method when we need to process huge inputs.
We can further improve the score by changing the greedy selection criteria (evaluation function), keeping multiple candidates instead of focusing on one best partial solution (beam search), or using the output of greedy algorithms as an initial solution of other methods.
For more information, please refer to the editorial that will be published after the contest.