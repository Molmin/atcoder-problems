Score : $200$ points

## Problem Statement

$N$ examinees took an entrance exam.<br>
The examinee numbered $i$ scored $A_i$ points in math and $B_i$ points in English.

The admissions are determined as follows.

1. $X$ examinees with the highest math scores are admitted.
2. Then, among the examinees who are not admitted yet, $Y$ examinees with the highest English scores are admitted.
3. Then, among the examinees who are not admitted yet, $Z$ examinees with the highest total scores in math and English are admitted.
4. Those examinees who are not admitted yet are rejected.

Here, in each of the steps 1. to 3., ties are broken by examinees' numbers: an examinee with the smaller examinee's number is prioritized.  See also Sample Input and Output.

Print the examinees' numbers of the admitted examinees determined by the steps above in ascending order, separated by newlines.

## Constraints

- All values in input are integers.
- $1 \le N \le 1000$
- $0 \le X,Y,Z \le N$
- $1 \le X+Y+Z \le N$
- $0 \le A_i,B_i \le 100$

## Input

Input is given from Standard Input in the following format:

> $N$ $X$ $Y$ $Z$
> 
> $A_1$ $A_2$ $\dots$ $A_N$
> 
> $B_1$ $B_2$ $\dots$ $B_N$

## Output

Print the examinees' number of the admitted examinees in ascending order, separated by newlines.

```input1
6 1 0 2
80 60 80 60 70 70
40 20 50 90 90 80
```

```output1
1
4
5
```

- First, $1$ examinee with the highest math score is admitted.-   - Examinee $1$ is tied with Examinee $3$, scoring the highest $80$ points in math, and the tie is broken by the examinees' numbers, so Examinee $1$ is admitted.
- Then, among the examinees who are not admitted yet, $0$ examinees with the highest English scores are admitted.-   - Obviously, it does not affect the admissions.
- Then, among the examinees who are not admitted yet, $2$ examinees with the highest total scores in math and English are admitted.-   - First, among the examinees who are not admitted yet, Examinee $5$ is admitted, scoring the highest total score of $160$ points.
-   - Next, among the examinees who are not admitted yet, Examinee $4$ is tied with Examinee $6$, scoring a total score of $150$ points.  The tie is broken by the examinees' numbers, and Examinee $4$ is admitted.

Therefore, the examinees' numbers of the admitted examinees are $1$, $4$, and $5$.  Print them in ascending order.

```input2
5 2 1 2
0 100 0 100 0
0 0 100 100 0
```

```output2
1
2
3
4
5
```

All examinees may be admitted.

```input3
15 4 3 2
30 65 20 95 100 45 70 85 20 35 95 50 40 15 85
0 25 45 35 65 70 80 90 40 55 20 20 45 75 100
```

```output3
2
4
5
6
7
8
11
14
15
```