Score : $200$ points

## Problem Statement

$N$ students took an exam. The students are labeled as Student $1$, Student $2$, $\dots$, Student $N$, and Student $i$ scored $a_i$ points.

A student who scored less than $P$ points are considered to have failed the exam and cannot earn the credit. Find the number of students who failed the exam.

## Constraints

- $1 \leq N \leq 10^5$
- $1 \leq P \leq 100$
- $0 \leq a_i \leq 100$ $(1 \leq i \leq N)$
- All values in input are integers.

## Input

Input is given from Standard Input in the following format:

> $N$ $P$
> 
> $a_1$ $a_2$ $\dots$ $a_N$

## Output

Print the number of students who failed the exam.

```input1
4 50
80 60 40 0
```

```output1
2
```

Students $1$ and $2$, who scored $80$ and $60$ points, respectively, succeeded in scoring at least $50$ points to earn the credit.<br>
On the other hand, Students $3$ and $4$, who scored $40$ and $0$ points, respectively, fell below $50$ points and failed the exam. Thus, the answer is $2$.

```input2
3 90
89 89 89
```

```output2
3
```

```input3
2 22
6 37
```

```output3
1
```