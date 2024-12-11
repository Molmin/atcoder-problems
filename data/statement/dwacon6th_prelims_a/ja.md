配点 : $200$ 点

## 問題文

ニワンゴ君は $N$ 曲からなるプレイリストを作りました。
$i$ 番目の曲はタイトルが $s_i$ で、再生時間が $t_i$ 秒です。
ここで、$s_1,\ldots,s_N$ が相異なることが保証されます。

ニワンゴ君はこのプレイリストを再生しながら、作業をしていました。(すなわち、プレイリストの全曲が順番通りに $1$ 回ずつ、間に休止を挟むことなく再生されました。)
しかし、作業中に居眠りをしてしまい、全曲の再生が終わったあとに起きました。
記録から、タイトルが $X$ の曲の再生が終わるタイミングでニワンゴ君が寝てしまったことがわかりました。

ニワンゴ君が寝ている間に曲が再生された時間が何秒あったかを求めてください。

## 制約

- $1 \leq N \leq 50$
- $s_i,X$ は英小文字のみからなる長さ $1$ 以上 $100$ 以下の文字列
- $s_1,\ldots,s_N$ は相異なる
- $s_i = X$ なる整数 $i$ が存在する
- $1 \leq t_i \leq 1000$
- $t_i$ は整数

## 入力

入力は以下の形式で標準入力から与えられる。

> $N$
> 
> $s_1$ $t_1$
> 
> $\vdots$
> 
> $s_{N}$ $t_N$
> 
> $X$

## 出力

答えを出力せよ。

```input1
3
dwango 2
sixth 5
prelims 25
dwango
```

```output1
30
```

- ニワンゴ君が寝ている間に再生された曲は `sixth` と `prelims` です。
- これらの再生時間の総和である $30$ が答えです。

```input2
1
abcde 1000
abcde
```

```output2
0
```

- ニワンゴ君が寝ている間に再生された曲はありません。
- 再生時間の総和は $0$ となります。

```input3
15
ypnxn 279
kgjgwx 464
qquhuwq 327
rxing 549
pmuduhznoaqu 832
dagktgdarveusju 595
wunfagppcoi 200
dhavrncwfw 720
jpcmigg 658
wrczqxycivdqn 639
mcmkkbnjfeod 992
htqvkgkbhtytsz 130
twflegsjz 467
dswxxrxuzzfhkp 989
szfwtzfpnscgue 958
pmuduhznoaqu
```

```output3
6348
```