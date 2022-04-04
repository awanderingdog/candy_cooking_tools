const fs = require('fs');
const outputDir = "./new-data-for-update/";

try {
        fs.mkdirSync(outputDir);
} catch {}


const data = [
        ['1800', 'Cx7uATPcvA24fqxpMxzeCryDNY2VwJmbRSz7R9eBzafF', 'https://arweave.net/P-E2GrvBtyhUuv4JBA8hYIJ58rDf9XVzjNT4Cm6vj-4'],
        ['1801', 'Gb196LDYu3BbifCYU7daGoU9vuWKN6f2cMj4cs6gYgKh', 'https://arweave.net/02F6-nA1clRiOtUNYLG-LsVR2Ysjd5IrQxfy1PIAx_0'],
        ['1802', '7JBYrLxE3qzHbBot4mH4kNeZxNnb4qbZPzGi9FgBravi', 'https://arweave.net/nBgY-sWv2IOtbBlhF1qIkOgTYPIKB2g3p-4MKfiYdfQ'],
        ['1803', 'E1xtiC6n8eegtLraBUjTKhxJ23e8shdYAwywKDYwkbJY', 'https://arweave.net/ULLRPxYS_MyXZmKxDUg3Fjfcbfi9XHsgRLEBEaz8dIA'],
        ['1804', '7Ap6sCGYnWi4RhdwBmiCPSzUDWFeawPdVmMQdAos1SM3', 'https://arweave.net/5xyatwzqkMsnh6L9oIb-V_RFyBkwMOj03Rjm3Wbkb6I'],
        ['1805', '3t8MXVbCvquFYESngzVaX7RRfFmrqE3sUVdUxG6sSaZy', 'https://arweave.net/AmxGsjvkzp3JMRe-p_1fonPBOgcESGb4I5U9gnVIpbA'],
        ['1806', 'ASnQxiSsvPa4dU8BQQXZ4dzDjqe7FV5xQhuau3eytxBJ', 'https://arweave.net/kJBsbJ7XqMtejMaw6vTRoLofLRJPV921KqH97y1MvFU'],
        ['1807', '47XoW39HRo1edhBroDu6HbhCpgMWB9mpLNfoWNJyJxJY', 'https://arweave.net/ku3KM0orEKrNRoVzyBIL5ARTDXXFm0WCLYcbc4Wmo04'],
        ['1808', 'E28BmTEZX5XfiTPr1hb8aaDJndAagr3rAEK6Dnz6Ko7w', 'https://arweave.net/sH05kkww6DjIDdJ8xuvJNaona14_q6PXew1Bp3URodA'],
        ['1809', 'BeujcJseG5QBQWyMuBxe55FuMHfTJ8W1rfnV18K1re7P', 'https://arweave.net/lsvVgQG7XyKNT-bwUasTyC8vuvO-_Uh9VSei5Ia4vmc'],
        ['1810', '8sjQ3kQqiVC9PtLAQXzDcg8kmowfqysmthTUzk5EZGZn', 'https://arweave.net/r9YfoJi4SIjXLNa1j3q5nDX361diYpxEbuKNsQkczyc'],
        ['1811', 'DBav24TV7tWCeiAfuitwqd9XSKoWhjuSeFfoudHy6KAZ', 'https://arweave.net/0zrmh7fYvjSqvWtpOpQWpNAG1LQtByprbcicu2FPvyQ'],
        ['1812', 'CNXMQEmVGtBJJG6RwkSk7K7YQPU63JzZ2ReoohvtZLiM', 'https://arweave.net/qgHzkCW3vWBSwb3CYGhylfNfN2-0uqKNUboPm6sDm9M'],
        ['1813', '8Thn3L9N6gAbZxcx3FyXW9yK1uPwrri1nw2hTCiR61aa', 'https://arweave.net/ly6HH_FGz2qasdx2DJs9q2YN3eucPlej5yVfLmBe7Yw'],
        ['1814', 'FvzsBhWu5LHdyjBdrWYMsThFPWYTmNUZyad6URhTxeVx', 'https://arweave.net/Ug6QueTCArrp7XEEPH7MTpoF9-aMhZt4Cd4lsnUQgig'],
        ['1815', '43wiSuEUs6RK4Chkn1FHjpqq4W4JGs8oJbVPoYWScfvp', 'https://arweave.net/IDiIZRlXXO_MYd1mm5Zphk91e9PFlHdO0q6zkGJFC5w'],
        ['1816', 'HidveJdhq4FQQucjsdyvg5YPsKhxv5D2BXbNjNxZfZDT', 'https://arweave.net/nxBSvb9UFTY0LksyPlF6Uj_ELxodLTBB0hCgOq3_UQk'],
        ['1817', 'HtZ6rucZt1JuVGvyTjTHJ5KC7KGdyBWCTsXJ5meKBd7V', 'https://arweave.net/mQ-j53XrJFGoC6iJRiFwLHP5Sq1QPlv7KxNAF2L0HIM'],
        ['1818', '8fJg8UJS1sUAwpt6J18joqbhBSrk8bfiwYYPnQozoCKt', 'https://arweave.net/EwWbpk7JxKxMuSvT50MzBqYFoYL72qCa-Ua5mUYcNgo'],
        ['1819', 'G4VHdQFKFP1eGiuAYXByK4a5AmDsNxAKtZF7oQFdyWf2', 'https://arweave.net/zcB9SJl7QMRxvJRTLXOThIsLn_4wcMGdHhJ7tEIJi0k'],
        ['1820', '22DaWWQx4nTrqRi8my1r4z1uXbjLbHJp9cFEtGya3HA1', 'https://arweave.net/0sOkmzRZI_QdIGlyX8JaLKoWbkNKXgLh46IzMISHDcs'],
        ['1821', '8sQmZMDJwGWXYYa3g4czUQyY2NstR7bKNcfECPaFhSrB', 'https://arweave.net/FXe8RryFZRQbtr_gdFO6BXsl1csw2JwAqFZIn8na_C4'],
        ['1822', 'ERmh2hGEAGujRHJptY2XCXzdakG21zfnyYiSt9YE9tVg', 'https://arweave.net/N-ucM8ViIC0wGQ6dMEsTHdDqU9N9dz4YkV7vEE-BDgY'],
        ['1823', '14mNSHJdnjEJatDhgVYZfkcTZ1eTx1PBcm9T9BKGxc6v', 'https://arweave.net/sqHBr0zAQzXW41lrDyfsRwv9mtBmtj521HECYODyNT0'],
        ['1824', 'BF2NFcC4sMUmuzC23Zu8Jp2Qs8qcRrUnaYAEdBp43neL', 'https://arweave.net/lKsWKNyQEBNUmx6edspcESmlewP7SSeOnnowEV0LEkY'],
        ['1825', '3tnSP7BCLPawDvJ5tSQgpXY1Gis3zVMZJCC9K76hB56n', 'https://arweave.net/sLJ2KtksxLWUC27rKya7TsJ89pt4sWB5V9-Vn2iU-jY'],
        ['1826', '5gFKZAd2S6mUSbJLgVyJ6kHWNHtyTMVyEExfraDg6sU2', 'https://arweave.net/6ErTN1fjtSj_oSjr-f1yI-IPKjbyQl3dvwX6MqUyLHo'],
        ['1827', '4wHh2BEBRaCk9aUV4w9mviKJYbZNCec4hZA2SMiBhire', 'https://arweave.net/SzaYaSS4p3XYoCsmk3CU4JDX2cgbh-jIjWuqvrHoF-s'],
        ['1828', 'MhpHYASpw6fHyyvzqg5JHsFie3Sq2bSFvZpWUgApnWE', 'https://arweave.net/kW0YdJ_OS8IC4G8DUewT0mBlEF6nKQ6COOvG5l5yvBM'],
        ['1829', '6id7pwF5bLHp9F7ZuPN9eUsSzg5525TRzaGpS8uWQBgZ', 'https://arweave.net/TcjnxgqScZuD4ryftz-U3K2dzWqEgjVQtQyjmDHa_LE'],
        ['1830', '9b9xjnSxcPcvohB8ZMpw4QHHf8aREPRhMXaDHser9dcz', 'https://arweave.net/_5FYSpR9QwsNQElVIvPWiPuqjznki_TfIinb0liX0ck'],
        ['1831', 'BEwCjGy46e7CSU1ppCGfkcv7uRRBnxmc13dmnUhE7vbx', 'https://arweave.net/6r3DPBIf1prl_Bd4HmX24COEH9Knk-dkM2WvwifW9A4'],
        ['1832', 'AzbUDTue5MXYwWdk5oDCy55mvWNTZWmwsvGoCqv8pDeR', 'https://arweave.net/euzIwA92m3ZStKm5qSH-wrC96DHED1TYvfD7UBPu-1w'],
        ['1833', 'GrSSDNazy6KEFp1AGpmnAffoUFjW9k83QYuihfCsG7YW', 'https://arweave.net/UjgxW72A-p_TZ5l-fXKS1-BjZNugtrDe8dpUe658_Qs'],
        ['1834', '6oi5a5AzPmRdfYKaQwVZAeVnDVWqPEKwSu2biBCw4jAo', 'https://arweave.net/rSWTK_y4RVfg5vMjZN9tJSITw80qK-Q0ZU7ErKiKavc'],
        ['1835', 'EtjvM7egpfLrYnfJgTmKiH32yeWSmMPizuBAaCbkEt4Z', 'https://arweave.net/v5jUrnKR8YznnuGH9HAcYUwgziH3kn6S9yZwGG8bFIo'],
        ['1836', '4yTFmy4vzSvvyA9NPDLowfPCRwGAn9XaWEi9AGu95Eju', 'https://arweave.net/8dh4RkGp6TMZJuRQc4wOsf_eDgqcqA8pWg6ruR_aWpI'],
        ['1837', 'FRopgqwx29fcU7nKTdn71DewLT2Ea8ianEd8SsdhHy5H', 'https://arweave.net/Ns3q9lwRA3exNgDvoE-nredaE-gFNin7juBohnN3cDc'],
        ['1838', 'EuwBPNVTk6bTCQMgvwYRBsEWBgzyRymP4bMV4nki9grs', 'https://arweave.net/Fg-uvuyhzrGeMFRWAdVB_avKcPDj5LTiQZLP7ntJ74Q'],
        ['1839', '6CtRKbqzpcbauUYUZutM4uFBkYt4LKAV2CEzVPiftp36', 'https://arweave.net/MVuCMz-s4lndjNtGAW1RAYytjnwbaT25JBakupkP3Dw'],
        ['1840', '6jqrpMNVhMKbABzcjLb6KjXFu24dtQv4bzSvx3WpmrFF', 'https://arweave.net/E7avgoCDE_Wc_l4_5OhkvE74hRh3AJf-6awNljQwj-U'],
        ['1841', 'F9Sb5fv7sMmLfZoH5zHj2221g2dZVcR3wRPFKr8chMsF', 'https://arweave.net/F-A5LGx7DURL-c9nhbouLbFikJkJaBYjO-PSYyVFCV0'],
        ['1842', '9RTyqv1EgmTzgxhJhWCSJptpZ8NyqURDea542phwaeFr', 'https://arweave.net/eJULULamVZutMtsThaOiPS0VxUVNzN4cnSOQYPBhgoI'],
        ['1843', '2fBM36mbTWQJ2cn1CRFvyKHhvyphxvrFVEQq7sX4VYs2', 'https://arweave.net/1jHbK_ipl6bWe67JYnlGoJqW0N5Ag73n-BS-YaZkbiA'],
        ['1844', '4dPThn3gutsLsPGruZhFEAmcdTdSErHFqoA7GFXc5vfY', 'https://arweave.net/D4Yt7vYugnMy4Q6EDM0VS6JEUuCkyoInJ26RqtKjj3Y'],
        ['1845', '5yhD6F1KteBgXsSULQ2EnLm4k8vYUbPuceQ1TYHewDu1', 'https://arweave.net/XR8GPoWqBOaXLLmcGShnmYcK4ZzVNKeRLsIcokmRs5g'],
        ['1846', 'Dk2Jfar2PyrYkCXu3WmbgfrywDRqtzLadv9prEo1bMHc', 'https://arweave.net/bCtYhg1-OiouiVcVwEXTaSAHOau4FbBDYrjV98bWeCA'],
        ['1847', 'vafhvp53X9MQirmnYEWCM7rpGipDbbipn1GTMTEmQii', 'https://arweave.net/5DSOmONEPOJQI_LwK2jPFptytWhLpVGPrdH2Qpdguqc'],
        ['1848', '5nJvULuWJg2wJL6aAKxVFQB3iBKqeAe4UrbmXF1TRjee', 'https://arweave.net/BL2Wu9Yt7ad4wwBpGUX5qrxQtqNK7pD6Zctl3Cxqiq4'],
        ['1849', 'DuhykDyvJF7N67bxJXoEJoVMDW2JzH29NWPRe5xu3vA4', 'https://arweave.net/KCMWLiS3fxCazzy7RnEWJX-JxZO4tmJ-6EP7kjRPfnA'],
        ['1850', 'FEy8pJsfxdFsvHS5PZzzkTS9w26FtGq5F5zJEAW7fisM', 'https://arweave.net/egBzFPxN6xkpbeQZg3FbPU9qJHeWyAJyF0Jw2AzTNek'],
        ['1851', '9svk6U9AmqmezbHHfCRETnoweWtfBZsGCpceXzc2AFdR', 'https://arweave.net/9TN_-nqXCfNNCcSmeaQZX6g7nSiY7AdAKYbe-GzTklA'],
        ['1852', 'FDb46robwFJ2kA7MsRa5fsTE4WuqQK9wqbBMmSrtT9YN', 'https://arweave.net/ivYE-NoTPmxkv4XmBAs_uABfOVNtNUddPZugVAb802M'],
        ['1853', 'BnByANMHkZ9QuvxTjUR2UA5xrUum1HxBBjGdkCnUV4gr', 'https://arweave.net/3wR31jeQ8q8AnkQAzascAR_oIGIKivoWjouyikwDvaQ'],
        ['1854', 'E9BCUSNrFND1hdhBDqqg7ovW6hQnX5akySptx8zbHHm2', 'https://arweave.net/4s-nZ6Y8CmWwoQn5ZEe3nDsnCs2yUf60qpYK9tIuHVI'],
        ['1855', 'F1Rs7tQSUGuqRq7WHaTJjS95gQ9gmZGnomRchSCubMPf', 'https://arweave.net/r6y1gSoStWyEBtn_ouxowFYHiLJKO0-jg-f09UaLJZM'],
        ['1856', '5GXheFerXCakzzmZrw5HF6L4TEA4xaGJxJmMeJBdPa68', 'https://arweave.net/W0zmSG5dUiwkAX_qTMq54sSz9vLCwozjfWLYVR9fU0s'],
        ['1857', 'GkUb6kDoS6b3ZnUL4bn7HQNMmwZFShGGvKW7FtB5gKMX', 'https://arweave.net/LRxS4NAHozp3FLqyvP6lf0ZI_gLNXMgIZx46epgq6F8'],
        ['1858', 'C4nMyGNHtWKwhYXNRE5Yu6ESKeykBWJCdvLRpCj4dUFf', 'https://arweave.net/DrUXFVZE6L9m_4r3YTVEvxOODKW8qevpL_3ARm8OduU'],
        ['1859', 'DAJhTWkLV6zJcSyxVyoyCoMVpQrm7N2F3xXiLENfd92X', 'https://arweave.net/PRNDSvfHlMrca2F2Fz80CqiAqCe3EqGE3NmyavZbPuQ'],
        ['1860', 'GpDUHb2ZNAkzhPWbBxWY76orfePHAT1TWw8eY67k87we', 'https://arweave.net/Sk9xA3rGOQwyfGFIVGcmx8PkOVuzvc5ynXXE1TBXas4'],
        ['1861', 'KJreAPjZoG2Z2tGg3K5d4XqucVQXnv9aUHoidvNqNKg', 'https://arweave.net/CuSubUxzc8BkLtMzCQj5bgrXM7P_L7_BULHOwzZrrJ4'],
        ['1862', '37Cwbd7fTPrFgwpe8mtTLqYB4oKegkYgwxeyXyJRk5nP', 'https://arweave.net/QKyCth7Z9Qak-RIOXG1dvakog0ATnk4Hff35cX8Sjjw'],
        ['1863', 'HYEqko8HiLvVGZ7L7fAL8AEx9txbVR6be68C2nnWRZ7s', 'https://arweave.net/tg0X3JkSF1hH_W2rwa6C7Hh5yweLh3ci7DOoStoKBiU'],
        ['1864', '6J8jnzRLoXSF64atr2dfdNCrDMjRtR1gWzuHmrDbsmXS', 'https://arweave.net/VuCge-i9dYUnm835aCvHxEI0uyUjDYikAH8CCQmDDog'],
        ['1865', 'DpjR1Rx94N7sCx1wDngHsLsg3Jrfjd7oQA69yes4bGvT', 'https://arweave.net/hEooaHvQBnen9mOSlTMzI8Cbo7ET0UHxpfn-srtsj7E'],
        ['1866', '4XoSQfqH43YUqywwHoVGc5YBhjLad3wbKLNr7hrSe5Nu', 'https://arweave.net/8hXpXPG6bW82NH0Yc7ig9nd4D0mdfMnbt-WPuZ1ggu0'],
        ['1867', 'CHd9XtSN9GUJ2fpRri2ZsMGjgNBPHxNk264tgGsugqLQ', 'https://arweave.net/cQoQx22FOdj7mP6qw67fWTxI0yRceSBLTct2jtW4kdo'],
        ['1868', '6q6XVbzgHU5ogBHKK3T44aNApYhnyvMjvwJSGpSK9jiK', 'https://arweave.net/FvNGwEIGjtvWbRPTCqkJ_j0uUIchY07KDVmYvl5n9qQ'],
        ['1869', 'XBoezKCSbqodhxGrS2gyecGhqc9CzozuqahNLP9dCqN', 'https://arweave.net/L-SPxp6kiBibD2IUAG03aCrI03dSRWO8_YSKiJ8Ti0M'],
        ['1870', 'EVV2Q8KuGWGu83gFwjp8sg7sDcN6RaazTT4HKoHnBuWg', 'https://arweave.net/7QuMu9G1p6_ScSHJgjqsXCHHzQDzzhpFl1Xh3W86yfA'],
        ['1871', 'BrFUChx7GBmku1sx7g6KnHHpTw5gpJ3inCu9aMXk12x6', 'https://arweave.net/FrcVdx9vLzleBlfwt5KGiBNfVzAqfRcPJgt9PEgGTw0'],
        ['1872', 'HCbCCEryCRgGGdKDM3CMbxDrnaGWG1Vu2mFQ8eeqvacv', 'https://arweave.net/9YZ8HDseXwG6ENWpMeGMNNckreWiZgq0RHADMZtq6tw'],
        ['1873', 'GtXoT23nu7sygNfx1X4bjakCCcDxmVAtmoTPWyt4bd5j', 'https://arweave.net/zSlpDOX4wXytqBU_wzW9lsgZy3jN-lsHUkqrWiaF4VM'],
        ['1874', 'J6Eu6emjEqMiRmRFXVyWrAwu84yy4cdr632aRhc9fV1t', 'https://arweave.net/v2IxLapCQa9XiB5oCWzJvlC-0jYWONLAt2WjHXbOrEM'],
        ['1875', 'DCWmCaCbEtCMrcZj4i9tASt3k4LKbXbY6LaFwBUgB3FS', 'https://arweave.net/xqQBSKYA83kd5FFCraHHoclNlpfRje765NZlNB2y5bo'],
        ['1876', '3dE6P25XuHoDWV7VqjrsPJGrR6T7hBAFJnAi7EY9CNF5', 'https://arweave.net/7KzNdhgjNRkLHFDpHWPEenggxD3Dkck2hfoUd7WLPYk'],
        ['1877', 'B8v3Dr7jYsR4T5WAmH78DMJ7N8KQofkNEMeqLRLDCDKj', 'https://arweave.net/4gOryUF28-I7XW9v70jTrbIw9m5tYexbYaeIWk2JOEI'],
        ['1878', 'EkLkdE6dHHArvvitr4STKBkPtw5rKCVQSa8HkxweD2vi', 'https://arweave.net/bhkIAbnSHpnQoIG02ID1J_7TrCvDYNp87tgOOyDV_qg'],
        ['1879', '9w1YdqY93BHKh87F36wANQYvZm1iTJcJ8AC8VZ8wRJJ9', 'https://arweave.net/nULxr1iLorIMICwKw7ePLRKjx1wQ6tdDdU7cef99c5I'],
        ['1880', 'F7gaFx5SLXk8nFtgoymJbiERXhNad1eMPvwQBykHJVG5', 'https://arweave.net/63PXmVurlTz2Fwq3bwz9BQXoM0mB_YK_r4WXcVPRTy4'],
        ['1881', '4VoN8Tc9vacfjW3NRR4hwVo4Un2xPYCV9AKYRHgvPKwJ', 'https://arweave.net/p_o00X4JYVre6b14sqgBQLvyjWhZHITU3i7OfFQHNxQ'],
        ['1882', 'EdnhxTomnZMRd9xiWatXxY6bJVodoD9zCgKvwRCCM1Gg', 'https://arweave.net/2t97zqPfEJyVWp3uZhfTnvop1tn4Rc8yEnqHvdlMNFI'],
        ['1883', 'GvwWiw1MBrmnxyxu9JGKohwvdpLFua7FZo8FJTVCPDK1', 'https://arweave.net/YZhhlNDa5lh0CYM4CgmtWvlM5kLtYP7wTqtWRWRHLt4'],
        ['1884', 'EPo3PTTHMrUP1bi9urW5c6gQF3GohtWBsQ5fgShFGmp5', 'https://arweave.net/-QR0HXq_-8rVjFZVzPL9SHe6dPTtQ0iIIPZS1F2V6eU'],
        ['1885', '5FEfY4G8E8XCwnK4eDUNDQRaZH1MXEANTtWnZo37Qzik', 'https://arweave.net/dVl_H0AtPMsgwzlsjFC_aqIOY322hX_Or4OeeDlFN3I'],
        ['1886', '6jnP4W4rrnsf88vucqv9JNe9bdbxQ8xHm56AQ62sGa1n', 'https://arweave.net/M0HEI6NRRRdM9Rf_2jSt_24lGbZiT6Q7OmrSBA-YwRU'],
        ['1887', '5FQFVrvxwybuCEXRBs4rwuy1mp7ckcxRjiPfcZSbUyG2', 'https://arweave.net/akzI7F9njfc-o-b32jWIMcOAO-Jf_1uEIDpfg4WiA-k'],
        ['1888', 'HU3zSjXZwB1QqK4TpXjano8VemTRKTJR6hghpXJ4mXQv', 'https://arweave.net/HaprhBMSmuIzwhJTKqGZfCgUY6cE2Azgj_7HN58CNJU'],
        ['1889', '5PGi2nYn4n6dWo5oaA4FpT1PY4yBSBz1bwYaMV9VkqSY', 'https://arweave.net/D23ygUhjIRo0QrUFJn_1vgr2DcluG_cKONHmNVLpVrM'],
        ['1975', '9CbiT3MBCPPK6Dih2EXAHJzYYxjwpkxLVxq71y2sLhDm', 'https://arweave.net/igT9813fLT24sdunuyQoaJH6BiauA86Q0etDQ91BBCE'],
        ['1976', 'EDsCPc2TArD56wNFwzSHrXYX11WMjfH2y5v8YDFxVJoX', 'https://arweave.net/zHQZz3xPlOCNtfr4Whp9cX1mhm2weXQryW45fjhRKQY'],
        ['1977', '8V4u1kQQuwyznEH23TmmGYNLSA6diH8z4uTQ1AQatGvx', 'https://arweave.net/fzlz_djhzNUoYowvoOLSlDtfAV484jOsmmcYtJ-6Tlg'],
        ['1978', '7SSfwDyAsNhvaFktHGhcrfqSbt5fQrjVcQ2bRwwA14a4', 'https://arweave.net/4R9Pz6AeJMJcAwOwvuN8_WC4lfDlNvh_ZGe4zDcGY64'],
        ['1979', 'Cu84ChrZmw2LH9JiRexMS7HTL3XN14CigVtx9NFCyqmu', 'https://arweave.net/R2KobFJW5__sJAYIZZKpYXaK6Lm0zDtKM4vlQ2m_Wbg'],
        ['1980', '4sKsoWdGHHpzn5EefvQ8ydvpXBjnxK1y5BZ3FxiJrMdJ', 'https://arweave.net/Zf5h8CPcZz1BRfEd8B6AwbG8tu1O9q8lKT1DMvP0JeE'],
        ['1981', '8Tv9a7psz2ZeHQdMfwWooGiWL759omCubSSd8Mc8ucNK', 'https://arweave.net/ZRUSRfzGwDjHJyDr9iFgiifC5is7j4CIKvcY6xraobM'],
        ['1982', 'B9yb7VXM8tB6yUxGmkkhxrKrsy1HdvPrbXTdzsNbYBzC', 'https://arweave.net/1GVzn7_9Samw932xTZDRqHPnRl12oKlNrozm9ZV5NyA'],
        ['1983', 'Umpr9K49mAjY4hKELXQTWF43GfuSDjQ4F5FG79Cpygu', 'https://arweave.net/qqDFsj00TZE_VizrcaPbmbayGfyS2j13dngxXfyy3-0'],
        ['1984', 'Dyv87Zb9kTXtTyNurb66HJYiyNtQuwJTJR3Vx54TBRmk', 'https://arweave.net/lGIztOsX2sRr2GRcqdKNkI5cqdn23u1snxzUuK5hf64'],
        ['1985', 'AGjgB6CNTvc8Qh3X6XP4uqDhQgVH4Xt9yCy8UeKqk6MN', 'https://arweave.net/tMzdcPuEijF9BvNUW4ii74wOM5TOUWT5smQSDdhYYeo'],
        ['1986', '2MV91bp2FdC4ExiBi1X8jgaYueWwF5EFHcuAApEqC82A', 'https://arweave.net/CuBeFQbJJtcXnJ_j80EYuQWI8-S38hVpJzOFFLGSZ0k'],
    ];

const data_schema = {
        "mint_account": "",
        "nft_data": {
            "creators": [
                {
                    "address": "87n4qo7823MpucZXhCDnDu8hcNijsPMgxXkSLBpkkkPt",
                    "share": 45,
                    "verified": false
                },
                {
                    "address": "5oQZn9ANcpdhgMddVRhWkpKChpP3qoE4RzCuDhAcd73L",
                    "share": 45,
                    "verified": true
                },
                {
                    "address": "GjRFspzszqNCnZFztp94PUu1HnMMibgNDzfDC4Awbt87",
                    "share": 10,
                    "verified": false
                }
            ],
            "seller_fee_basis_points": 500,
            "name": "",
            "symbol": "AWD",
            "uri": ""
        }
    };

const NAME_PREFIX = "A Wandering Dog #";
    
async function cook() {
        for (let f = 0; f < data.length; f++) {
                const info = data[f];

                const number = info[0];
                const mint = info[1];
                const uri = info[2];

                data_schema.mint_account = mint;
                data_schema.nft_data.uri = uri;
                data_schema.nft_data.name = NAME_PREFIX + number;

                fs.writeFileSync(outputDir + mint + '.json', JSON.stringify(data_schema));

        }
        // fs.writeFileSync(outputDir + fileNumber + '.json', JSON.stringify(md));
}

cook();
