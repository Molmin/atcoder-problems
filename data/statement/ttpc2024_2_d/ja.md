配点 : $100$ 点

## 問題文

長さ $N$ の非負整数列 $A,B$ があります。はじめ、$A=(A_1,A_2,\ldots,A_N),B=(B_1,B_2,\ldots,B_N)$ です。

$Q$ 個のクエリが与えられるので、与えられた順に処理してください。

各クエリは次の $2$ 種類のどちらかです。

- タイプ $1$ : `1 i a b` の形式で与えられる。$A_i$ の値を $a$ に、$B_i$ の値を $b$ に変更する。
- タイプ $2$ : `2 Y 0 0` の形式で与えられる。次の問題を解く。<blockquote>
<p>非負整数 $S$ に対し、非負整数列 $X = (X_0, X_1, \dots, X_N)$ を次の漸化式で定義します。</p>
<ul>
<li>$X_0 = S$</li>
<li>各 $1 \le i \le N$ について、$X_i = \begin{cases} X_{i - 1} \oplus A_i &amp; \text{if } X_{i - 1} \equiv 1 \pmod{2} \\ X_{i - 1} \oplus B_i &amp; \text{if } X_{i - 1} \equiv 0 \pmod{2} \end{cases}$</li>
</ul>
<p>適切に非負整数 $S$ を設定したとき $X_N=Y$ とすることができるか判定し、可能な場合は、$X_N=Y$ となるような $S$ の最小値を出力してください。<br>
$X_N=Y$ となるような $S$ が存在しない場合は、`-1` を出力してください。</p>
</blockquote>

## 制約

- 入力はすべて整数
- $1 \le N \le 2 \times 10^5$
- $1 \le Q \le 2 \times 10^5$
- $0 \le A_i,B_i &lt; 2^{60} \ (1 \le i \le N)$
- タイプ $1$ のクエリにおいて、$1 \le i \le N$ , $0 \le a ,b &lt; 2^{60}$
- タイプ $2$ のクエリにおいて、$0 \le Y \lt 2^{60}$
- タイプ $2$ のクエリが $1$ つ以上存在する

## 部分点

追加の制約 $Q=1$ を満たすデータセットに正解した場合は $30$ 点が与えられる。

## 入力

入力は以下の形式で標準入力から与えられる。

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

ただし、$\mathrm{query}_i$ は $i$ 番目のクエリであり、以下のいずれかの形式で与えられる。

> 1 $i$ $a$ $b$
> 2 $Y$ 0 0

## 出力

タイプ $2$ のクエリの個数を $q$ として、$q$ 行出力せよ。$i$ 行目には $i$ 個目のタイプ $2$ のクエリに対する答えを出力せよ。

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

$A = (0),\ B = (1)$ であるので、$S$ が奇数なら $X_N = S$、$S$ が偶数なら $X_N = S \oplus 1$ となります。<br>
$1$ 個目のクエリでは、$Y = 5$ です。$S$ が $4$ または $5$ であれば $X_N = 5$ となるので、最小値の $4$ を出力します。
$2$ 個目のクエリでは、$Y = 6$ です。$X_N = 6$ となるような $S$ は存在しないので、`-1` を出力します。
$3$ 個目のクエリでは、$Y = 7$ です。$S$ が $6$ または $7$ であれば $X_N = 7$ となるので、最小値の $6$ を出力します。

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