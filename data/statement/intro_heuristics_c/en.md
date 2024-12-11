(Please read problem A first. The maximum score you can get by solving this problem C is 1, which will have almost no effect on your ranking.)

## Beginner's Guide

"Local search" is a powerful method for finding a high-quality solution.
In this method, instead of constructing a solution from scratch, we try to find a better solution by slightly modifying the already found solution.
If the solution gets better, update it, and if it gets worse, restore it.
By repeating this process, the quality of the solution is gradually improved over time.
The pseudo-code is as follows.

```plain
solution = compute an initial solution (by random generation, or by applying other methods such as greedy)
while the remaining time > 0:
    slightly modify the solution (randomly)
    if the solution gets worse:
        restore the solution
```

For example, in this problem, we can use the following modification: pick the date $d$ and contest type $q$ at random and change the type of contest to be held on day $d$ to $q$.
The pseudo-code is as follows.

```plain
t[1..D] = compute an initial solution (by random generation, or by applying other methods such as greedy)
while the remaining time > 0:
    pick d and q at random
    old = t[d] # Remember the original value so that we can restore it later
    t[d] = q
    if the solution gets worse:
        t[d] = old
```

The most important thing when using the local search method is the design of how to modify solutions.

1. If the amount of modification is too small, we will soon fall into a dead-end (local optimum) and, conversely, if the amount of modification is too large, the probability of finding an improving move becomes extremely small.
2. In order to increase the number of iterations, it is desirable to be able to quickly calculate the score after applying a modification.

In this problem C, we focus on the second point.
The score after the modification can, of course, be obtained by calculating the score from scratch.
However, by focusing on only the parts that have been modified, it may be possible to quickly compute the difference between the scores before and after the modification.
From another viewpoint, the impossibility of such a fast incremental calculation implies that a small modification to the solution affects a majority of the score calculation.
In such a case, we may need to redesign how to modify solutions, or there is a high possibility that the problem is not suitable for local search.
Let's implement fast incremental score computation.
It's time to demonstrate the skills of algorithms and data structures you have developed in ABC and ARC!

In this kind of contest, where the objective is to find a better solution instead of the optimal one, a bug in a program does not result in a wrong answer, which may delay the discovery of the bug.
For early detection of bugs, it is a good idea to unit test functions you implemented complicated routines.
For example, if you implement fast incremental score calculation, it is a good idea to test that the scores computed by the fast implementation match the scores computed from scratch, as we will do in this problem C.

## Problem Statement

You will be given a contest schedule for $D$ days and $M$ queries of schedule modification.
In the $i$-th query, given integers $d_i$ and $q_i$, change the type of contest to be held on day $d_i$ to $q_i$, and then output the final satisfaction at the end of day $D$ on the updated schedule.
Note that we do not revert each query. That is, the $i$-th query is applied to the new schedule obtained by the $(i-1)$-th query.

## Input

Input is given from Standard Input in the form of the input of Problem A followed by the output of Problem A and the queries.

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
> 
> $M$
> 
> $d_1$ $q_1$
> 
> $d_2$ $q_2$
> 
> $\vdots$
> 
> $d_M$ $q_M$

- The constraints and generation methods for the input part are the same as those for Problem A.
- For each $d=1,\ldots,D$, $t_d$ is an integer generated independently and uniformly at random from ${1,2,\ldots,26}$.
- The number of queries $M$ is an integer satisfying $1\leq M\leq 10^5$.
- For each $i=1,\ldots,M$, $d_i$ is an integer generated independently and uniformly at random from ${1,2,\ldots,D}$.
- For each $i=1,\ldots,26$, $q_i$ is an integer satisfying $1\leq q_i\leq 26$ generated uniformly at random from the $25$ values that differ from the type of contest on day $d_i$.

## Output

Let $v_i$ be the final satisfaction at the end of day $D$ on the schedule after applying the $i$-th query.
Print $M$ integers $v_i$ to Standard Output in the following format:

> $v_1$
> 
> $v_2$
> 
> $\vdots$
> 
> $v_M$

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
5
1 7
4 11
3 4
5 24
4 19
```

```output1
72882
56634
38425
27930
42884
```

Note that this example is a small one for checking the problem specification. It does not satisfy the constraint $D=365$ and is never actually given as a test case.

## Next Step

Let's go back to Problem A and implement the local search algorithm by utilizing the incremental score calculator you just implemented!
For this problem, the current modification "pick the date $d$ and contest type $q$ at random and change the type of contest to be held on day $d$ to $q$" is actually not so good. By considering why it is not good, let's improve the modification operation.
One of the most powerful and widely used variant of the local search method is "Simulated Annealing (SA)", which makes it easier to reach a better solution by stochastically accepting worsening moves.
For more information about SA and other local search techniques, please refer to the editorial that will be published after the contest.