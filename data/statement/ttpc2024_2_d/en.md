Score: $100$ points

## Problem Statement

You are given two sequences of non-negative integers $A$ and $B$, each of length $N$. Initially, $A=(A_1, A_2, \ldots, A_N)$ and $B=(B_1, B_2, \ldots, B_N)$.

You will be given $Q$ queries. Process them in the order they are given.

Each query is one of the following two types:

- Type $1$: Given in the format `1 i a b`. Update the value of $A_i$ to $a$ and the value of $B_i$ to $b$.
- Type $2$: Given in the format `2 Y 0 0`. Solve the following problem:<blockquote>
<p>For a non-negative integer $S$, define a sequence of non-negative integers $X = (X_0, X_1, \dots, X_N)$ using the following recurrence:</p>
<ul>
<li>$X_0 = S$</li>
<li>For each $1 \le i \le N$, $X_i = \begin{cases} X_{i - 1} \oplus A_i &amp; \text{if } X_{i - 1} \equiv 1 \pmod{2} \\ X_{i - 1} \oplus B_i &amp; \text{if } X_{i - 1} \equiv 0 \pmod{2} \end{cases}$</li>
</ul>
<p>Determine whether it is possible to set a non-negative integer $S$ such that $X_N = Y$. If possible, output the smallest such $S$.<br>
If no such $S$ exists, output `-1`.</p>
</blockquote>

## Constraints

- All inputs are integers.
- $1 \le N \le 2 \times 10^5$
- $1 \le Q \le 2 \times 10^5$
- $0 \le A_i, B_i &lt; 2^{60} \ (1 \le i \le N)$
- For a Type $1$ query, $1 \le i \le N$, $0 \le a, b &lt; 2^{60}$
- For a Type $2$ query, $0 \le Y &lt; 2^{60}$
- There is at least one Type $2$ query.

## Partial Score

$30$ points will be awarded for passing the test set satisfying the additional constraint $Q=1$.

## Input

The input is given in the following format:

> $N$ $Q$
> 
> $A_1$ $A_2$ $\ldots$ $A_N$
> 
> $B_1$ $B_2$ $\ldots$ $B_N$
> 
> $\mathrm{query}_1$
> 
> $\vdots$
> 
> $\mathrm{query}_Q$

Here, $\mathrm{query}_i$ represents the $i$-th query and is given in one of the following formats:

> 1 $i$ $a$ $b$
> 2 $Y$ 0 0

## Output

Let $q$ be the number of Type $2$ queries. Output $q$ lines, where the $i$-th line contains the answer to the $i$-th Type $2$ query.

```input1
1 3
0
1
2 5 0 0
2 6 0 0
2 7 0 0
```

```output1
4
-1
6
```

Given $A = (0),\ B = (1)$, the value of $X_N$ is:

- $X_N = S$ if $S$ is odd.
- $X_N = S \oplus 1$ if $S$ is even.

For the first query with $Y = 5$, both $S = 4$ and $S = 5$ result in $X_N = 5$, so the smallest $S$ is $4$.<br>
For the second query with $Y = 6$, there is no $S$ such that $X_N = 6$, so output `-1`.<br>
For the third query with $Y = 7$, both $S = 6$ and $S = 7$ result in $X_N = 7$, so the smallest $S$ is $6$.

```input2
10 1
310214852498133736 505276263682091678 273987911350501637 317207700241861186 878845869214220663 722059890180131902 597424946894933345 74297940232615233 969543184238991085 567669635596262039
760374976835769237 114205047640377864 975115657391620675 659404150340533368 514313531921108960 255579815636209538 1042405225853490071 891193105039531117 1032475514675208675 968262176137127595
2 942999108116930288 0 0
```

```output2
494185924924343867
```

```input3
10 5
20 19 18 17 16 15 14 13 12 11
11 12 13 14 15 16 17 18 19 20
2 8 0 0
1 6 100 200
2 12 0 0
1 10 32 662
2 100 0 0
```

```output3
8
103
-1
```

```input4
10 5
464468010685205695 652469322679259637 207750579744900414 551282264132274959 477385551779769369 457669217633528368 1124978699497706079 993018743713584412 347799342391956023 253839229959865684
43481420251962425 913779804742334221 721829783836314668 643562100144275666 148532568860178532 348780722732705987 905040003050597634 962374691997649953 160408954061784257 6313574278114070
2 942999108116930288 0 0
1 7 911289147093700219 315969390490734880
2 570806468566359262 0 0
1 5 865153057674787555 127079554510737035
2 71991180131886804 0 0
```

```output4
167766290121628811
833427363106128513
657636533261400102
```